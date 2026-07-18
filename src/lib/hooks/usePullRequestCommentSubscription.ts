/**
 * Live comment updates for a pull request's conversation.
 *
 * Opens a GraphQL subscription over SSE (graphql-yoga serves subscriptions as
 * Server-Sent Events) and, on each pushed change, invalidates the conversation
 * query so the UI refetches the current comment set. This is an enhancement layer
 * over the existing refetch-on-mutation behavior: if the stream cannot connect
 * (auth, CORS, network), errors are swallowed and mutations still keep the
 * conversation fresh, so realtime degrades gracefully rather than breaking the page.
 */

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import {
  PullRequestCommentChangedDocument,
  usePullRequestConversationQuery,
} from "@/generated/graphql";
import { API_BASE_URL } from "@/lib/config/env.config";
import { createSseClient } from "@/lib/graphql/sseClient";

interface UsePullRequestCommentSubscriptionArgs {
  /** Pull request row id, or undefined before the pull request has loaded. */
  pullRequestId: string | undefined;
  /** Current authenticated user's access token, or undefined when signed out. */
  accessToken: string | undefined;
}

/**
 * Subscribe to comment changes on a pull request and keep the conversation query
 * in sync. No-ops (and opens no connection) without a pull request id or token,
 * and tears the subscription down on unmount or when either input changes.
 */
export const usePullRequestCommentSubscription = ({
  pullRequestId,
  accessToken,
}: UsePullRequestCommentSubscriptionArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!pullRequestId || !accessToken || !API_BASE_URL) return;

    const client = createSseClient(() => accessToken);

    const unsubscribe = client.subscribe(
      {
        query: String(PullRequestCommentChangedDocument),
        variables: { pullRequestId },
      },
      {
        next: () => {
          queryClient.invalidateQueries({
            queryKey: usePullRequestConversationQuery.getKey({
              pullRequestId,
            }),
          });
        },
        // refetch-on-mutation remains the fallback; don't surface stream errors
        error: () => {
          console.warn("pull request comment subscription unavailable");
        },
        complete: () => {},
      },
    );

    return () => {
      unsubscribe();
      client.dispose();
    };
  }, [pullRequestId, accessToken, queryClient]);
};
