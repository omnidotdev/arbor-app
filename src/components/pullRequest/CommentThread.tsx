"use client";

import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@omnidotdev/thornberry/avatar";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CommentComposer } from "./CommentComposer";
import { formatTimestamp } from "./reviewTypes";

import type {
  CommentActions,
  CommentTree,
  PullRequestComment,
} from "./reviewTypes";

interface CommentThreadProps {
  tree: CommentTree;
  actions: CommentActions;
  /** Optional human label for the anchored location, e.g. "line 42". */
  anchorLabel?: string;
}

/** Two-letter avatar fallback from a username. */
const initialsFor = (username: string) =>
  username.slice(0, 2).toUpperCase() || "?";

/**
 * A single comment thread: the root comment, its replies and a reply composer.
 * Edit and delete controls appear only on the current user's own comments.
 */
export function CommentThread({
  tree,
  actions,
  anchorLabel,
}: CommentThreadProps) {
  const { root, replies } = tree;
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = async (body: string) => {
    await actions.createComment({
      body,
      path: root.path,
      line: root.line,
      side: root.side as "left" | "right" | null,
      commitSha: root.commitSha,
      replyToId: root.rowId,
    });
    setIsReplying(false);
  };

  return (
    <div className="rounded-md border bg-background">
      {anchorLabel && (
        <div className="border-b bg-muted/40 px-3 py-1.5 text-muted-foreground text-xs">
          {anchorLabel}
        </div>
      )}

      <ul className="divide-y">
        <li>
          <CommentItem comment={root} actions={actions} />
        </li>
        {replies.map((reply) => (
          <li key={reply.rowId}>
            <CommentItem comment={reply} actions={actions} isReply />
          </li>
        ))}
      </ul>

      <div className="border-t p-3">
        {isReplying ? (
          <CommentComposer
            onSubmit={handleReply}
            onCancel={() => setIsReplying(false)}
            placeholder="Reply..."
            submitLabel="Reply"
            autoFocus
            disabled={!actions.currentUserId}
            disabledReason="Sign in to reply"
          />
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsReplying(true)}
            disabled={!actions.currentUserId}
          >
            Reply
          </Button>
        )}
      </div>
    </div>
  );
}

interface CommentItemProps {
  comment: PullRequestComment;
  actions: CommentActions;
  isReply?: boolean;
}

/** A single rendered comment with optional author-only edit/delete controls. */
function CommentItem({ comment, actions, isReply }: CommentItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const isOwn = Boolean(
    actions.currentUserId && comment.authorId === actions.currentUserId,
  );
  const username = comment.author?.username ?? "Unknown";
  const edited =
    new Date(comment.updatedAt).getTime() -
      new Date(comment.createdAt).getTime() >
    1000;

  const handleEdit = async (body: string) => {
    await actions.updateComment(comment.rowId, body);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    setDeleteError(null);
    try {
      await actions.deleteComment(comment.rowId);
    } catch {
      setDeleteError("Something went wrong. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-3 p-3">
      <AvatarRoot size="sm" className="mt-0.5 shrink-0">
        {comment.author?.avatarUrl ? (
          <AvatarImage src={comment.author.avatarUrl} alt="" />
        ) : null}
        <AvatarFallback className="text-xs">
          {initialsFor(username)}
        </AvatarFallback>
      </AvatarRoot>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 text-sm">
          <span className="font-medium">{username}</span>
          <span className="text-muted-foreground text-xs">
            {formatTimestamp(comment.createdAt)}
            {edited ? " (edited)" : ""}
          </span>
          {isReply && (
            <span className="text-muted-foreground text-xs">replied</span>
          )}
        </div>

        {isEditing ? (
          <div className="mt-2">
            <CommentComposer
              onSubmit={handleEdit}
              onCancel={() => setIsEditing(false)}
              initialValue={comment.body}
              submitLabel="Save"
              autoFocus
            />
          </div>
        ) : (
          <p className="mt-1 whitespace-pre-wrap break-words text-sm">
            {comment.body}
          </p>
        )}

        {isOwn && !isEditing && (
          <div className="mt-2 flex items-center gap-2">
            {isDeleting ? (
              <>
                <span className="text-muted-foreground text-xs">
                  Delete this comment?
                </span>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => void handleDelete()}
                  disabled={actions.isMutating}
                >
                  Delete
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDeleting(false)}
                  disabled={actions.isMutating}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-muted-foreground text-xs hover:text-foreground hover:underline"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setIsDeleting(true)}
                  className="text-muted-foreground text-xs hover:text-red-600 hover:underline dark:hover:text-red-400"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        )}

        {deleteError && (
          <p className="mt-1 text-red-600 text-xs dark:text-red-400">
            {deleteError}
          </p>
        )}
      </div>
    </div>
  );
}
