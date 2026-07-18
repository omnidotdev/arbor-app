/**
 * Data + mutation surface for a pull request's review loop.
 *
 * Wraps the conversation query (comments + reviews) and the comment/review
 * mutations behind a single hook. Every mutation invalidates the conversation
 * query so the UI reflects the new state without realtime subscriptions.
 *
 * The API pins each write to the authenticated user: `authorId`/`reviewerId`
 * must equal the current user's row id, which this hook supplies from the
 * session. Writes are rejected (and surfaced as a generic error) when no
 * authenticated user is available.
 */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

import {
  useCreatePullRequestCommentMutation,
  useCreatePullRequestReviewMutation,
  useDeletePullRequestCommentMutation,
  usePullRequestConversationQuery,
  useUpdatePullRequestCommentMutation,
} from "@/generated/graphql";
import pullRequestConversationOptions from "@/lib/options/pullRequestConversation.options";

import type {
  CommentActions,
  NewCommentInput,
  PullRequestComment,
  PullRequestReview,
  ReviewState,
} from "@/components/pullRequest/reviewTypes";

/** Generic message shown when a mutation fails, to avoid leaking internals. */
const GENERIC_ERROR = "Something went wrong. Please try again.";

interface UsePullRequestConversationArgs {
  /** Pull request row id, or undefined before the pull request has loaded. */
  pullRequestId: string | undefined;
  /** Current authenticated user's row id. */
  currentUserId: string | undefined;
}

interface UsePullRequestConversationResult {
  comments: PullRequestComment[];
  reviews: PullRequestReview[];
  isLoading: boolean;
  isError: boolean;
  actions: CommentActions;
  submitReview: (input: {
    state: ReviewState;
    body: string | null;
  }) => Promise<void>;
  isSubmittingReview: boolean;
}

export const usePullRequestConversation = ({
  pullRequestId,
  currentUserId,
}: UsePullRequestConversationArgs): UsePullRequestConversationResult => {
  const queryClient = useQueryClient();

  const conversationQuery = useQuery(
    pullRequestConversationOptions({ pullRequestId: pullRequestId ?? "" }),
  );

  const invalidate = useCallback(() => {
    if (!pullRequestId) return;
    return queryClient.invalidateQueries({
      queryKey: usePullRequestConversationQuery.getKey({ pullRequestId }),
    });
  }, [queryClient, pullRequestId]);

  const createMutation = useMutation({
    mutationKey: useCreatePullRequestCommentMutation.getKey(),
    mutationFn: (input: NewCommentInput) => {
      if (!pullRequestId || !currentUserId) throw new Error(GENERIC_ERROR);
      return useCreatePullRequestCommentMutation.fetcher({
        input: {
          pullRequestComment: {
            pullRequestId,
            authorId: currentUserId,
            body: input.body,
            path: input.path ?? null,
            line: input.line ?? null,
            side: input.side ?? null,
            replyToId: input.replyToId ?? null,
            commitSha: input.commitSha ?? null,
          },
        },
      })();
    },
    onSuccess: invalidate,
  });

  const updateMutation = useMutation({
    mutationKey: useUpdatePullRequestCommentMutation.getKey(),
    mutationFn: ({ rowId, body }: { rowId: string; body: string }) =>
      useUpdatePullRequestCommentMutation.fetcher({
        input: { rowId, patch: { body } },
      })(),
    onSuccess: invalidate,
  });

  const deleteMutation = useMutation({
    mutationKey: useDeletePullRequestCommentMutation.getKey(),
    mutationFn: (rowId: string) =>
      useDeletePullRequestCommentMutation.fetcher({ input: { rowId } })(),
    onSuccess: invalidate,
  });

  const reviewMutation = useMutation({
    mutationKey: useCreatePullRequestReviewMutation.getKey(),
    mutationFn: (input: { state: ReviewState; body: string | null }) => {
      if (!pullRequestId || !currentUserId) throw new Error(GENERIC_ERROR);
      return useCreatePullRequestReviewMutation.fetcher({
        input: {
          pullRequestReview: {
            pullRequestId,
            reviewerId: currentUserId,
            state: input.state,
            body: input.body,
            submittedAt: new Date(),
          },
        },
      })();
    },
    onSuccess: invalidate,
  });

  const createComment = useCallback(
    async (input: NewCommentInput) => {
      await createMutation.mutateAsync(input);
    },
    [createMutation],
  );

  const updateComment = useCallback(
    async (rowId: string, body: string) => {
      await updateMutation.mutateAsync({ rowId, body });
    },
    [updateMutation],
  );

  const deleteComment = useCallback(
    async (rowId: string) => {
      await deleteMutation.mutateAsync(rowId);
    },
    [deleteMutation],
  );

  const submitReview = useCallback(
    async (input: { state: ReviewState; body: string | null }) => {
      await reviewMutation.mutateAsync(input);
    },
    [reviewMutation],
  );

  return {
    comments: conversationQuery.data?.pullRequestComments?.nodes ?? [],
    reviews: conversationQuery.data?.pullRequestReviews?.nodes ?? [],
    isLoading: conversationQuery.isLoading,
    isError: conversationQuery.isError,
    actions: {
      currentUserId,
      createComment,
      updateComment,
      deleteComment,
      isMutating:
        createMutation.isPending ||
        updateMutation.isPending ||
        deleteMutation.isPending,
    },
    submitReview,
    isSubmittingReview: reviewMutation.isPending,
  };
};
