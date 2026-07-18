"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronRight, FileWarning } from "lucide-react";

import pullRequestFileDiffOptions from "@/lib/options/pullRequestFileDiff.options";
import { cn } from "@/lib/utils";
import { diffStatusMeta, getRichDiffKind, rawProxyUrl } from "./diffTypes";
import { ImageDiff } from "./ImageDiff";
import { RichDiff } from "./RichDiff";
import { TextDiff } from "./TextDiff";

import type { ChangedFile } from "./diffTypes";
import type { DiffViewMode } from "./useDiffViewMode";

interface FileDiffCardProps {
  file: ChangedFile;
  owner: string;
  repo: string;
  number: number;
  anchorId: string;
  expanded: boolean;
  onToggleExpanded: () => void;
  viewed: boolean;
  onToggleViewed: () => void;
  mode: DiffViewMode;
}

/**
 * Collapsible per-file diff container: a header with the path, status badge,
 * add/delete counts and a "Viewed" checkbox, plus the lazily loaded diff body.
 *
 * Only text diffs render here. Binary files show a placeholder, and the body is
 * structured so image and rich diff variants can slot in during a later phase.
 */
export function FileDiffCard({
  file,
  owner,
  repo,
  number,
  anchorId,
  expanded,
  onToggleExpanded,
  viewed,
  onToggleViewed,
  mode,
}: FileDiffCardProps) {
  const meta = diffStatusMeta[file.status];
  const richKind = getRichDiffKind(file.path);

  // SVG is flagged as an image by the API but is text, so it renders as a rich
  // diff. Only non-rich image files use the raw byte proxy and skip the text
  // content fetch
  const isImageDiff = file.isImage && !richKind;

  // only fetch the file contents once the card is expanded. Images are served as
  // raw bytes over the proxy instead, so their text content is never fetched
  const diffQuery = useQuery(
    pullRequestFileDiffOptions(
      { ownerSlug: owner, repoSlug: repo, number, path: file.path },
      { enabled: expanded && !file.isBinary && !isImageDiff },
    ),
  );

  const fileDiff = diffQuery.data?.pullRequests?.nodes?.[0]?.fileDiff;

  // Same-origin proxy URLs for the old and new image bytes. A null oid means the
  // side does not exist (added has no old, deleted has no new)
  const oldImageSrc = rawProxyUrl(
    owner,
    repo,
    file.oldOid,
    file.oldPath ?? file.path,
  );
  const newImageSrc = rawProxyUrl(owner, repo, file.newOid, file.path);

  return (
    <div
      id={anchorId}
      className="scroll-mt-4 overflow-hidden rounded-lg border"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
        <button
          type="button"
          onClick={onToggleExpanded}
          aria-label={expanded ? "Collapse file" : "Expand file"}
          className="flex shrink-0 items-center text-muted-foreground hover:text-foreground"
        >
          {expanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>

        <span
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded font-medium text-xs",
            meta.className,
          )}
          title={meta.title}
        >
          {meta.label}
        </span>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          {file.oldPath && file.oldPath !== file.path && (
            <code className="truncate text-muted-foreground text-xs">
              {file.oldPath} {"->"}
            </code>
          )}
          <code className="truncate font-medium text-sm">{file.path}</code>
        </div>

        <span className="flex shrink-0 items-center gap-1.5 text-xs tabular-nums">
          {file.additions > 0 && (
            <span className="text-green-600 dark:text-green-400">
              +{file.additions}
            </span>
          )}
          {file.deletions > 0 && (
            <span className="text-red-600 dark:text-red-400">
              -{file.deletions}
            </span>
          )}
        </span>

        <label className="flex shrink-0 cursor-pointer select-none items-center gap-1.5 text-muted-foreground text-xs">
          <input
            type="checkbox"
            checked={viewed}
            onChange={onToggleViewed}
            className="h-3.5 w-3.5 cursor-pointer"
          />
          Viewed
        </label>
      </div>

      {/* Body */}
      {expanded && (
        <div>
          {isImageDiff ? (
            <ImageDiff
              oldSrc={oldImageSrc}
              newSrc={newImageSrc}
              status={file.status}
            />
          ) : file.isBinary ? (
            <div className="flex items-center gap-2 p-4 text-muted-foreground text-sm">
              <FileWarning className="h-4 w-4" />
              Binary file not shown
            </div>
          ) : diffQuery.isLoading ? (
            <div className="p-4 text-muted-foreground text-sm">
              Loading diff...
            </div>
          ) : diffQuery.isError ? (
            <div className="p-4 text-red-600 text-sm dark:text-red-400">
              Failed to load diff
            </div>
          ) : fileDiff ? (
            richKind ? (
              <RichDiff
                path={file.path}
                kind={richKind}
                oldText={fileDiff.oldText}
                newText={fileDiff.newText}
                mode={mode}
              />
            ) : (
              <TextDiff
                path={file.path}
                oldText={fileDiff.oldText}
                newText={fileDiff.newText}
                mode={mode}
              />
            )
          ) : (
            <div className="p-4 text-muted-foreground text-sm">
              No diff available
            </div>
          )}
        </div>
      )}
    </div>
  );
}
