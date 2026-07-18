"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CommentComposer } from "./CommentComposer";
import { CommentThread } from "./CommentThread";
import { buildCommentTrees } from "./reviewTypes";

import type { CommentActions, PullRequestComment } from "./reviewTypes";

interface FileCommentSectionProps {
  path: string;
  /** File-level comments (anchored to the file, not a specific line). */
  comments: PullRequestComment[];
  actions: CommentActions;
}

/**
 * File-level comment threads plus a composer, shown under a file's diff body.
 * Used for image and binary files that have no line anchoring, and as a place
 * for whole-file comments on any file.
 */
export function FileCommentSection({
  path,
  comments,
  actions,
}: FileCommentSectionProps) {
  const [isComposing, setIsComposing] = useState(false);
  const trees = buildCommentTrees(comments);

  const handleSubmit = async (body: string) => {
    await actions.createComment({ body, path, line: null, side: null });
    setIsComposing(false);
  };

  return (
    <div className="space-y-3 border-t bg-muted/20 p-3">
      {trees.length > 0 && (
        <div className="space-y-2">
          {trees.map((tree) => (
            <CommentThread
              key={tree.root.rowId}
              tree={tree}
              actions={actions}
            />
          ))}
        </div>
      )}

      {isComposing ? (
        <CommentComposer
          onSubmit={handleSubmit}
          onCancel={() => setIsComposing(false)}
          placeholder="Comment on this file"
          submitLabel="Add comment"
          autoFocus
          disabled={!actions.currentUserId}
          disabledReason="Sign in to comment"
        />
      ) : (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setIsComposing(true)}
          disabled={!actions.currentUserId}
        >
          Comment on this file
        </Button>
      )}
    </div>
  );
}
