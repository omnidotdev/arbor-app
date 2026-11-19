import { AsyncLocalStorage } from "node:async_hooks";

import type { GetAuthSession } from "@omnidotdev/providers/auth";

/**
 * Request-scoped auth store for the server (SSR).
 *
 * The GraphQL access token cannot live in a module-level singleton on the
 * server: SSR handles many requests concurrently in one process, so a shared
 * global would leak one user's token into another user's render. This module
 * uses Node `AsyncLocalStorage` to scope the resolved session (and its access
 * token) to a single request's async context, populated by the request
 * middleware in `src/start.ts` around the SSR render so child-route suspense
 * queries read the correct token.
 *
 * The session is resolved once per page request and reused by every server
 * read in that request (the root route's `fetchSession` included), so a page
 * load refreshes the access token at most once instead of once per caller.
 * Each extra refresh replays the same pre-rotation refresh token and rotates
 * it again, and the browser keeps only whichever rotated cookie lands last.
 *
 * Server-only: imports `node:async_hooks` and must never be bundled to the
 * client. Client code reaches it indirectly through `getCurrentAuthHeaders`,
 * whose server branch `createIsomorphicFn` strips from the client bundle.
 */

interface ServerAuthStore {
  accessToken: string | null;
  /**
   * The request's resolved session (`null` when signed out), or `undefined`
   * when only a token was bound and the session must be resolved normally
   */
  session?: GetAuthSession | null;
}

const als = new AsyncLocalStorage<ServerAuthStore>();

/**
 * Run `fn` with `token` bound as the request-scoped access token. Any
 * `getServerAccessToken` call within the same async context (including awaited
 * continuations such as the SSR render and route loaders) reads this token.
 */
export const runWithAccessToken = <T>(
  token: string | null | undefined,
  fn: () => T,
): T => als.run({ accessToken: token ?? null }, fn);

/**
 * Run `fn` with a resolved session bound for the request. Its access token is
 * what SSR GraphQL queries send, and `getServerSession` hands the same session
 * to any server read in the request so none of them resolves (and refreshes)
 * it again
 */
export const runWithSession = <T>(
  session: GetAuthSession | null,
  fn: () => T,
): T => als.run({ accessToken: session?.accessToken ?? null, session }, fn);

/**
 * Read the request-scoped access token, or `null` when called outside a
 * `runWithAccessToken` / `runWithSession` scope (e.g. a background task with no
 * active request)
 */
export const getServerAccessToken = (): string | null =>
  als.getStore()?.accessToken ?? null;

/**
 * Read the session resolved for this request, or `undefined` when none was
 * bound (outside a page request, e.g. a server function called by the client)
 */
export const getServerSession = (): GetAuthSession | null | undefined =>
  als.getStore()?.session;

/**
 * The request's session: the one the page request already bound when there is
 * one, otherwise `resolve()` (a server function called by the client, or a
 * caller that must bypass the bound session)
 */
export const getRequestSession = async (
  resolve: () => Promise<GetAuthSession | null>,
): Promise<GetAuthSession | null> => {
  const bound = getServerSession();

  return bound !== undefined ? bound : resolve();
};
