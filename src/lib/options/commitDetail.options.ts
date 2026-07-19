/**
 * Query options for a single commit and its changed files.
 */

import { queryOptions } from "@tanstack/react-query";

import { useCommitDetailQuery } from "@/generated/graphql";

import type { CommitDetailQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a commit by its oid along with the cheap
 * changed-file list (diff relative to the commit's first parent).
 */
const commitDetailOptions = (variables: CommitDetailQueryVariables) =>
  queryOptions({
    queryKey: useCommitDetailQuery.getKey(variables),
    queryFn: useCommitDetailQuery.fetcher(variables),
  });

export default commitDetailOptions;
