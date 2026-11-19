import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";

import { getAuth } from "@/lib/auth/getAuth";
import isPageRequest from "@/lib/auth/pageRequest";
import { runWithSession } from "@/lib/graphql/serverAuthContext";

/**
 * Request middleware that resolves the signed-in user's session once per page
 * request and binds it (with its OAuth access token) to the request's async
 * context for the whole server render.
 *
 * Why here: a `requestMiddleware` `server` fn wraps `next()`, and `next()` is
 * what runs the TanStack Start router load (every route `beforeLoad`/loader)
 * and the React SSR render where suspense GraphQL queries execute. Wrapping
 * `next()` in `runWithSession` keeps the AsyncLocalStorage store active
 * through all of those awaited continuations, so `getCurrentAuthHeaders` (read
 * per request inside `graphqlFetch`) attaches a Bearer token during SSR. A
 * module-level token singleton cannot do this: it is empty during SSR and
 * cross-request-unsafe under concurrent renders.
 *
 * The root route's `fetchSession` reuses this session rather than calling
 * `getAuth` again, so a page load refreshes the access token at most once and
 * every server read in the request sees the same token. `getAuth` may call
 * `setCookie`, which works here because the outer Start request handler
 * establishes its event storage before any request middleware runs.
 */
const serverAuthSessionMiddleware = createMiddleware({
  type: "request",
}).server(async ({ next, request, handlerType, pathname }) => {
  if (!isPageRequest({ handlerType, pathname })) return next();

  let session: Awaited<ReturnType<typeof getAuth>> = null;
  try {
    session = await getAuth(request);
  } catch {
    // Unauthenticated or transient auth failure: render with no session, the
    // API rejects protected fields and the route handles it as logged-out
  }

  return runWithSession(session, () => next());
});

/**
 * Server functions are same-origin RPC endpoints; keep them protected from
 * cross-site requests now that a custom `requestMiddleware` array replaces the
 * default CSRF middleware the handler would otherwise inject
 */
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware, serverAuthSessionMiddleware],
}));
