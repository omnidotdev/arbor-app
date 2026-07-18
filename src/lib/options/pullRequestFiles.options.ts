/**
 * Query options for a pull request with its changed files.
 */

import { queryOptions } from "@tanstack/react-query";

import { usePullRequestFilesQuery } from "@/generated/graphql";

import type { PullRequestFilesQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a pull request and the cheap changed-file list.
 */
const pullRequestFilesOptions = (variables: PullRequestFilesQueryVariables) =>
  queryOptions({
    queryKey: usePullRequestFilesQuery.getKey(variables),
    queryFn: usePullRequestFilesQuery.fetcher(variables),
  });

export default pullRequestFilesOptions;
