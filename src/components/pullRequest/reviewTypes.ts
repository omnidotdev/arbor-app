/**
 * Shared types and helpers for the pull request review loop: comments, threads
 * and reviews.
 */

import type { PullRequestConversationQuery } from "@/generated/graphql";

/** A single pull request comment (line, file-level or general). */
export type PullRequestComment = NonNullable<
  PullRequestConversationQuery["pullRequestComments"]
>["nodes"][number];

/** A single pull request review. */
export type PullRequestReview = NonNullable<
  PullRequestConversationQuery["pullRequestReviews"]
>["nodes"][number];

/** Diff side a line comment is anchored to. */
export type CommentSide = "left" | "right";

/** Canonical review verdicts. Stored as free text on the review row. */
export type ReviewState = "approved" | "changes_requested" | "commented";

/** Presentation metadata for a review state. */
export const reviewStateMeta: Record<
  ReviewState,
  { label: string; className: string }
> = {
  approved: {
    label: "Approved",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  changes_requested: {
    label: "Changes requested",
    className: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
  commented: {
    label: "Commented",
    className: "bg-muted text-muted-foreground",
  },
};

/** Fields needed to create a new comment or reply. */
export interface NewCommentInput {
  body: string;
  path?: string | null;
  line?: number | null;
  side?: CommentSide | null;
  replyToId?: string | null;
  commitSha?: string | null;
}

/**
 * Comment mutation surface shared by the thread, composer and diff components.
 * `currentUserId` gates the author-only edit/delete controls and supplies the
 * `authorId` the API pins the mutation to.
 */
export interface CommentActions {
  /** Current authenticated user's row id, or undefined when unavailable. */
  currentUserId: string | undefined;
  createComment: (input: NewCommentInput) => Promise<void>;
  updateComment: (rowId: string, body: string) => Promise<void>;
  deleteComment: (rowId: string) => Promise<void>;
  /** True while any comment mutation is in flight. */
  isMutating: boolean;
}

/** Format a comment or review timestamp for display. */
export const formatTimestamp = (value: Date | string): string => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

/** A root comment paired with its (chronological) replies. */
export interface CommentTree {
  root: PullRequestComment;
  replies: PullRequestComment[];
}

/**
 * Group a flat comment list into root-plus-replies trees, preserving the
 * incoming (chronological) order. Replies whose parent is absent from the set
 * are promoted to roots so nothing is silently dropped.
 */
export const buildCommentTrees = (
  comments: PullRequestComment[],
): CommentTree[] => {
  const byId = new Map(comments.map((comment) => [comment.rowId, comment]));
  const repliesByParent = new Map<string, PullRequestComment[]>();
  const roots: PullRequestComment[] = [];

  for (const comment of comments) {
    const parentId = comment.replyToId;
    if (parentId && byId.has(parentId)) {
      const existing = repliesByParent.get(parentId) ?? [];
      existing.push(comment);
      repliesByParent.set(parentId, existing);
    } else {
      roots.push(comment);
    }
  }

  return roots.map((root) => ({
    root,
    replies: repliesByParent.get(root.rowId) ?? [],
  }));
};
