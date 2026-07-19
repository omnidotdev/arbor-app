/**
 * Query options for a repository's stacked changes.
 */

import { queryOptions } from "@tanstack/react-query";

import { useStacksQuery } from "@/generated/graphql";

import type { StacksQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching every stack that belongs to a repository, ordered
 * newest first.
 */
const stacksOptions = (variables: StacksQueryVariables) =>
  queryOptions({
    queryKey: useStacksQuery.getKey(variables),
    queryFn: useStacksQuery.fetcher(variables),
  });

export default stacksOptions;
