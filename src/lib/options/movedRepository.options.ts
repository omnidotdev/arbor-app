/**
 * Query options for where a repository that moved away from a path lives now.
 */

import { queryOptions } from "@tanstack/react-query";

import { useMovedRepositoryQuery } from "@/generated/graphql";

import type { MovedRepositoryQueryVariables } from "@/generated/graphql";

const movedRepositoryOptions = (variables: MovedRepositoryQueryVariables) =>
  queryOptions({
    queryKey: useMovedRepositoryQuery.getKey(variables),
    queryFn: useMovedRepositoryQuery.fetcher(variables),
  });

export default movedRepositoryOptions;
