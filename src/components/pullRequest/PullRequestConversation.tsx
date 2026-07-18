"use client";

import { MessageSquare } from "lucide-react";

import { CommentComposer } from "./CommentComposer";
import { CommentThread } from "./CommentThread";
import { buildCommentTrees } from "./reviewTypes";

import type { CommentActions, PullRequestComment } from "./reviewTypes";

interface PullRequestConversationProps {
  /** General (non-line, non-file) comments for the pull request. */
  comments: PullRequestComment[];
  actions: CommentActions;
  isLoading: boolean;
  isError: boolean;
}

/**
 * The general conversation on a pull request: comments not anchored to a diff
 * line or file, plus a composer to add a new one.
 */
export function PullRequestConversation({
  comments,
  actions,
  isLoading,
  isError,
}: PullRequestConversationProps) {
  const trees = buildCommentTrees(comments);

  return (
    <div className="rounded-lg border">
      <div className="border-b px-4 py-3">
        <h2 className="font-semibold text-lg">Conversation</h2>
      </div>

      <div className="space-y-4 p-4">
        {isLoading ? (
          <p className="text-muted-foreground text-sm">
            Loading conversation...
          </p>
        ) : isError ? (
          <p className="text-red-600 text-sm dark:text-red-400">
            Failed to load the conversation.
          </p>
        ) : trees.length === 0 ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center text-muted-foreground">
            <MessageSquare className="h-8 w-8" />
            <p className="text-sm">No comments yet. Start the conversation.</p>
          </div>
        ) : (
          trees.map((tree) => (
            <CommentThread
              key={tree.root.rowId}
              tree={tree}
              actions={actions}
            />
          ))
        )}

        <div className="border-t pt-4">
          <CommentComposer
            onSubmit={(body) => actions.createComment({ body })}
            placeholder="Add a comment to the conversation"
            disabled={!actions.currentUserId}
            disabledReason="Sign in to comment"
          />
        </div>
      </div>
    </div>
  );
}
