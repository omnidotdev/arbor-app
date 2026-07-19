/**
 * Query options for a repository's merge queue entries.
 */

import { queryOptions } from "@tanstack/react-query";

import { useMergeQueueEntriesQuery } from "@/generated/graphql";

import type { MergeQueueEntriesQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching a repository's merge queue entries, ordered by
 * their position in the queue.
 */
const mergeQueueEntriesOptions = (variables: MergeQueueEntriesQueryVariables) =>
  queryOptions({
    queryKey: useMergeQueueEntriesQuery.getKey(variables),
    queryFn: useMergeQueueEntriesQuery.fetcher(variables),
  });

export default mergeQueueEntriesOptions;
