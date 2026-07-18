/**
 * Query options for a repository's pull requests.
 */

import { queryOptions } from "@tanstack/react-query";

import { usePullRequestsQuery } from "@/generated/graphql";

import type { PullRequestsQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching every pull request that belongs to a repository,
 * ordered newest first. Client-side filtering by state is applied at the call
 * site.
 */
const pullRequestsOptions = (variables: PullRequestsQueryVariables) =>
  queryOptions({
    queryKey: usePullRequestsQuery.getKey(variables),
    queryFn: usePullRequestsQuery.fetcher(variables),
  });

export default pullRequestsOptions;
