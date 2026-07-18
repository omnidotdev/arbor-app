import { createClient } from "graphql-sse";

import { API_GRAPHQL_URL } from "@/lib/config/env.config";

import type { Client } from "graphql-sse";

/**
 * Build a graphql-sse client pointed at the API's GraphQL endpoint.
 *
 * graphql-yoga serves GraphQL subscriptions as Server-Sent Events, so realtime
 * consumers use this transport rather than the request/response `graphql-request`
 * client used for queries and mutations.
 *
 * Auth is forwarded per connection via an async `headers` callback that reads the
 * caller-supplied token getter, matching how `graphqlClientFactory` attaches the
 * bearer token to query/mutation requests. Resolving the token lazily means a
 * refreshed token is picked up on the next (re)connect without rebuilding the client.
 *
 * SSR-safe: this only constructs the client object. No connection is opened until
 * the returned client's `subscribe` is called, which callers must do inside a
 * client-only effect.
 */
export const createSseClient = (
  getToken: () => string | null | undefined,
): Client =>
  createClient({
    url: API_GRAPHQL_URL,
    headers: (): Record<string, string> => {
      const token = getToken();
      return token ? { authorization: `Bearer ${token}` } : {};
    },
    // keep retrying; query refetch-on-mutation covers any gap while disconnected
    retryAttempts: Number.POSITIVE_INFINITY,
  });
