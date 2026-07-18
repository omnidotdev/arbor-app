/**
 * Query options for a pull request's conversation: line comments, file-level
 * comments, general comments, and reviews.
 */

import { queryOptions } from "@tanstack/react-query";

import { usePullRequestConversationQuery } from "@/generated/graphql";

import type { PullRequestConversationQueryVariables } from "@/generated/graphql";

/**
 * Query options for fetching all comments and reviews attached to a pull
 * request. Disabled until a pull request row id is available.
 */
const pullRequestConversationOptions = (
  variables: PullRequestConversationQueryVariables,
) =>
  queryOptions({
    queryKey: usePullRequestConversationQuery.getKey(variables),
    queryFn: usePullRequestConversationQuery.fetcher(variables),
    enabled: Boolean(variables.pullRequestId),
  });

export default pullRequestConversationOptions;
