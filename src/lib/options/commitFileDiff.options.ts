/**
 * Query options for a single file diff within a commit.
 */

import { queryOptions } from "@tanstack/react-query";

import { useCommitFileDiffQuery } from "@/generated/graphql";

import type { CommitFileDiffQueryVariables } from "@/generated/graphql";

/**
 * Query options for lazily fetching the old and new content of one file changed
 * by a commit. Pass `enabled` to defer the request until the file is expanded.
 */
const commitFileDiffOptions = (
  variables: CommitFileDiffQueryVariables,
  { enabled = true }: { enabled?: boolean } = {},
) =>
  queryOptions({
    queryKey: useCommitFileDiffQuery.getKey(variables),
    queryFn: useCommitFileDiffQuery.fetcher(variables),
    enabled,
  });

export default commitFileDiffOptions;
