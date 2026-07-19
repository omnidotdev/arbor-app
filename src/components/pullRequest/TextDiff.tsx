"use client";

import {
  DiffFile,
  DiffModeEnum,
  DiffView,
  SplitSide,
} from "@git-diff-view/react";
import { useEffect, useMemo, useState } from "react";

import { useTheme } from "@/providers/ThemeProvider";
import { CommentComposer } from "./CommentComposer";
import { CommentThread } from "./CommentThread";
import { getFileLang } from "./diffTypes";
import { buildCommentTrees } from "./reviewTypes";

import type {
  CommentActions,
  CommentSide,
  PullRequestComment,
} from "./reviewTypes";
import type { DiffViewMode } from "./useDiffViewMode";

import "@git-diff-view/react/styles/diff-view.css";

interface TextDiffProps {
  path: string;
  oldText: string | null | undefined;
  newText: string | null | undefined;
  mode: DiffViewMode;
  /** Inline (line-anchored) comments for this file. */
  comments?: PullRequestComment[];
  /** Comment mutation surface. Omitted where inline comments are not wired. */
  actions?: CommentActions;
}

/** Persistent widget payload attached to a diff line. */
interface LineThreadData {
  side: CommentSide;
  line: number;
  comments: PullRequestComment[];
}

/** Map a diff view split side to the stored comment side. */
const sideForSplit = (side: SplitSide): CommentSide =>
  side === SplitSide.old ? "left" : "right";

/**
 * Build the `@git-diff-view` extendData map from a file's inline comments,
 * bucketing each comment onto its old/new side by line number.
 */
const buildExtendData = (comments: PullRequestComment[]) => {
  const oldFile: Record<string, { data: LineThreadData }> = {};
  const newFile: Record<string, { data: LineThreadData }> = {};

  for (const comment of comments) {
    if (comment.line == null) continue;
    const side: CommentSide = comment.side === "left" ? "left" : "right";
    const bucket = side === "left" ? oldFile : newFile;
    const key = String(comment.line);
    const entry = bucket[key] ?? {
      data: { side, line: comment.line, comments: [] },
    };
    entry.data.comments.push(comment);
    bucket[key] = entry;
  }

  return { oldFile, newFile };
};

/**
 * Text diff for a single file, wrapping `@git-diff-view/react`.
 * The underlying view builds its diff on the client (in an effect), so this is
 * gated behind a mounted flag to keep server and first client render identical.
 *
 * Inline review comments are mounted as line widgets: existing threads render
 * under their line via `renderExtendLine`, and the hover "+" affordance opens a
 * composer via `renderWidgetLine` (both keyed by line number + side).
 */
export function TextDiff({
  path,
  oldText,
  newText,
  mode,
  comments,
  actions,
}: TextDiffProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lang = getFileLang(path);

  // @git-diff-view renders from a DiffFile. Build it from the raw old/new
  // content and compute the diff with initRaw, so a pure add or delete (one
  // side null) still renders its full one-sided diff. Passing raw content with
  // empty hunks to the `data` prop renders nothing
  const diffFile = useMemo(() => {
    const instance = DiffFile.createInstance({
      oldFile: { fileName: path, fileLang: lang, content: oldText ?? "" },
      newFile: { fileName: path, fileLang: lang, content: newText ?? "" },
      hunks: [],
    });
    instance.initRaw();
    return instance;
  }, [path, lang, oldText, newText]);

  if (!mounted) {
    return (
      <div className="p-4 text-muted-foreground text-sm">Loading diff...</div>
    );
  }

  const inlineComments = comments ?? [];
  const canComment = Boolean(actions?.currentUserId);
  const extendData = buildExtendData(inlineComments);

  return (
    <div className="overflow-x-auto text-sm">
      <DiffView<LineThreadData>
        diffFile={diffFile}
        diffViewMode={
          mode === "split" ? DiffModeEnum.Split : DiffModeEnum.Unified
        }
        diffViewTheme={theme === "dark" ? "dark" : "light"}
        diffViewHighlight
        diffViewWrap
        diffViewAddWidget={canComment && Boolean(actions)}
        extendData={extendData}
        renderExtendLine={
          actions
            ? ({ data }) => <InlineThreads data={data} actions={actions} />
            : undefined
        }
        renderWidgetLine={
          actions && canComment
            ? ({ lineNumber, side, onClose }) => (
                <div className="border-y bg-muted/20 p-3">
                  <CommentComposer
                    onSubmit={async (body) => {
                      await actions.createComment({
                        body,
                        path,
                        line: lineNumber,
                        side: sideForSplit(side),
                      });
                      onClose();
                    }}
                    onCancel={onClose}
                    autoFocus
                    placeholder="Comment on this line"
                    submitLabel="Add comment"
                  />
                </div>
              )
            : undefined
        }
      />
    </div>
  );
}

interface InlineThreadsProps {
  data: LineThreadData;
  actions: CommentActions;
}

/** Render the comment thread(s) anchored to a single diff line. */
function InlineThreads({ data, actions }: InlineThreadsProps) {
  const trees = buildCommentTrees(data.comments);

  return (
    <div className="space-y-2 border-y bg-muted/20 p-3">
      {trees.map((tree) => (
        <CommentThread key={tree.root.rowId} tree={tree} actions={actions} />
      ))}
    </div>
  );
}
