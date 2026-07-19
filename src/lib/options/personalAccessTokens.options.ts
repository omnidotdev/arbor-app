/**
 * Query options for the authenticated user's personal access tokens.
 */

import { queryOptions } from "@tanstack/react-query";

import { usePersonalAccessTokensQuery } from "@/generated/graphql";

/**
 * Query options for fetching the current user's personal access tokens. The
 * API scopes this connection to the authenticated user, so no filter is passed
 * from the client. Only non-secret fields are returned (there is no token hash
 * to read back).
 */
const personalAccessTokensOptions = () =>
  queryOptions({
    queryKey: usePersonalAccessTokensQuery.getKey(),
    queryFn: usePersonalAccessTokensQuery.fetcher(),
  });

export default personalAccessTokensOptions;
