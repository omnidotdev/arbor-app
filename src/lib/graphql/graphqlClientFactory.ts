import { createIsomorphicFn } from "@tanstack/react-start";
import { GraphQLClient } from "graphql-request";

import { API_GRAPHQL_URL } from "@/lib/config/env.config";
import { getServerAccessToken } from "@/lib/graphql/serverAuthContext";

let client: GraphQLClient | null = null;
let accessToken: string | null = null;

const toAuthHeaders = (token: string | null): Record<string, string> => {
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
};

/**
 * Resolve the current access token isomorphically.
 *
 * On the server the token is request-scoped (AsyncLocalStorage), so reading a
 * module-level singleton would be cross-request-unsafe and empty during SSR.
 * On the client the token lives in the module-level `accessToken` set by
 * `setAccessToken` from the root route. `createIsomorphicFn` strips the
 * server branch (and its `node:async_hooks` import) from the client bundle.
 */
const getCurrentToken = createIsomorphicFn()
  .server(() => getServerAccessToken())
  .client(() => accessToken);

export const getGraphQLClient = (): GraphQLClient => {
  if (!client) {
    client = new GraphQLClient(API_GRAPHQL_URL!, {
      headers: { "Content-Type": "application/json" },
    });
  }
  return client;
};

/**
 * Set the client-side access token. No-op for header resolution on the server,
 * where the token is request-scoped via AsyncLocalStorage instead
 */
export const setAccessToken = (token: string | null | undefined): void => {
  accessToken = token ?? null;
  if (client) {
    client.setHeaders({
      "Content-Type": "application/json",
      ...toAuthHeaders(accessToken),
    });
  }
};

export const getCurrentAuthHeaders = (): Record<string, string> =>
  toAuthHeaders(getCurrentToken());
