import { AsyncLocalStorage } from "node:async_hooks";

/**
 * Request-scoped GraphQL access token store for the server (SSR).
 *
 * The GraphQL access token cannot live in a module-level singleton on the
 * server: SSR handles many requests concurrently in one process, so a shared
 * global would leak one user's token into another user's render. This module
 * uses Node `AsyncLocalStorage` to scope the token to a single request's async
 * context, populated by the request middleware in `src/start.ts` around the
 * SSR render so child-route suspense queries read the correct token.
 *
 * Server-only: imports `node:async_hooks` and must never be bundled to the
 * client. Client code reaches it indirectly through `getCurrentAuthHeaders`,
 * which guards the import behind a `typeof window === "undefined"` check.
 */

interface ServerAuthStore {
  accessToken: string | null;
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
 * Read the request-scoped access token, or `null` when called outside a
 * `runWithAccessToken` scope (e.g. a background task with no active request)
 */
export const getServerAccessToken = (): string | null =>
  als.getStore()?.accessToken ?? null;
