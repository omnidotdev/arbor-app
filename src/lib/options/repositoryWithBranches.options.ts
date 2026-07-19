/**
 * Query options for a repository with its branch refs and default branch HEAD.
 */

import { queryOptions } from "@tanstack/react-query";

import { useRepositoryWithBranchesQuery } from "@/generated/graphql";

import type { RepositoryWithBranchesQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a repository along with its branch refs and the
 * default branch's HEAD commit metadata.
 */
const repositoryWithBranchesOptions = (
  variables: RepositoryWithBranchesQueryVariables,
) =>
  queryOptions({
    queryKey: useRepositoryWithBranchesQuery.getKey(variables),
    queryFn: useRepositoryWithBranchesQuery.fetcher(variables),
  });

export default repositoryWithBranchesOptions;
