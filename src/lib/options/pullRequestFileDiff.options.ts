/**
 * Query options for a single file diff within a pull request.
 */

import { queryOptions } from "@tanstack/react-query";

import { usePullRequestFileDiffQuery } from "@/generated/graphql";

import type { PullRequestFileDiffQueryVariables } from "@/generated/graphql";

/**
 * Query options for lazily fetching the old and new content of one changed file.
 * Pass `enabled` to defer the request until the file is expanded.
 */
const pullRequestFileDiffOptions = (
  variables: PullRequestFileDiffQueryVariables,
  { enabled = true }: { enabled?: boolean } = {},
) =>
  queryOptions({
    queryKey: usePullRequestFileDiffQuery.getKey(variables),
    queryFn: usePullRequestFileDiffQuery.fetcher(variables),
    enabled,
  });

export default pullRequestFileDiffOptions;
