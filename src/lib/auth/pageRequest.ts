/**
 * Whether a request renders a page, and so needs the user's session (and its
 * access token) bound for SSR.
 *
 * Decided by what TanStack Start is dispatching, not the `Accept` header: the
 * router renders HTML for `Accept: *\/*` too (curl, link checkers, some
 * prefetchers), and gating on `text/html` rendered those pages without the
 * token, so their GraphQL queries were rejected with 401. Server functions
 * resolve auth themselves, and `/api/*` server routes (Better Auth's handler,
 * the raw-file proxy) either need no session or resolve their own
 */
const isPageRequest = ({
  handlerType,
  pathname,
}: {
  handlerType: "router" | "serverFn";
  pathname: string;
}): boolean =>
  handlerType === "router" &&
  pathname !== "/api" &&
  !pathname.startsWith("/api/");

export default isPageRequest;
