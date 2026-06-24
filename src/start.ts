import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";

import { getAuth } from "@/lib/auth/getAuth";
import { runWithAccessToken } from "@/lib/graphql/serverAuthContext";

/**
 * Request middleware that binds the authenticated user's OAuth access token to
 * the request's async context for the whole server render.
 *
 * Why here: a `requestMiddleware` `server` fn wraps `next()`, and `next()` is
 * what runs the TanStack Start router load (every route `beforeLoad`/loader)
 * and the React SSR render where suspense GraphQL queries execute. Wrapping
 * `next()` in `runWithAccessToken` keeps the AsyncLocalStorage token active
 * through all of those awaited continuations, so `getCurrentAuthHeaders` (read
 * per request inside `graphqlFetch`) attaches a Bearer token during SSR. A
 * module-level token singleton cannot do this: it is empty during SSR and
 * cross-request-unsafe under concurrent renders.
 *
 * The session is resolved via `getAuth`, the same cached auth flow the root
 * route's `beforeLoad` uses (shared `authCache` cookie), so this adds no extra
 * token round-trip. `getAuth` may call `setCookie`, which works here because
 * the outer Start request handler establishes its event storage before any
 * request middleware runs.
 */
const serverAuthTokenMiddleware = createMiddleware({ type: "request" }).server(
  async ({ next, request }) => {
    // Only resolve the session for document (router) requests; server function
    // calls resolve auth themselves and never run SSR suspense queries
    if (request.headers.get("Accept")?.includes("text/html") === false) {
      return next();
    }

    let accessToken: string | undefined;
    try {
      const session = await getAuth(request);
      accessToken = session?.accessToken;
    } catch {
      // Unauthenticated or transient auth failure: render with no token, the
      // API rejects protected fields and the route handles it as logged-out
    }

    return runWithAccessToken(accessToken, () => next());
  },
);

/**
 * Server functions are same-origin RPC endpoints; keep them protected from
 * cross-site requests now that a custom `requestMiddleware` array replaces the
 * default CSRF middleware the handler would otherwise inject
 */
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware, serverAuthTokenMiddleware],
}));
