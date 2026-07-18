"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

import { ReadmeDisplay } from "@/components/repository/ReadmeDisplay";
import { cn } from "@/lib/utils";
import { TextDiff } from "./TextDiff";

import type { RichDiffKind } from "./diffTypes";
import type { CommentActions, PullRequestComment } from "./reviewTypes";
import type { DiffViewMode } from "./useDiffViewMode";

interface RichDiffProps {
  path: string;
  kind: RichDiffKind;
  oldText: string | null | undefined;
  newText: string | null | undefined;
  mode: DiffViewMode;
  /** Inline comments for this file, forwarded to the source (text) view. */
  comments?: PullRequestComment[];
  actions?: CommentActions;
}

type RichView = "rendered" | "source";

/**
 * Rich diff for markdown and SVG files: a Source (text diff) vs Rendered toggle.
 *
 * Markdown reuses the app's `ReadmeDisplay`. SVG is sanitized with DOMPurify
 * before being inlined, and the rendered view is gated behind a mounted flag so
 * sanitization only runs on the client where a DOM is available.
 */
export function RichDiff({
  path,
  kind,
  oldText,
  newText,
  mode,
  comments,
  actions,
}: RichDiffProps) {
  const [view, setView] = useState<RichView>("rendered");

  return (
    <div className="p-4">
      {/* View switcher */}
      <div className="mb-4 inline-flex rounded-md border">
        <button
          type="button"
          onClick={() => setView("rendered")}
          className={cn(
            "px-3 py-1.5 font-medium text-sm transition-colors",
            view === "rendered"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Rendered
        </button>
        <button
          type="button"
          onClick={() => setView("source")}
          className={cn(
            "border-l px-3 py-1.5 font-medium text-sm transition-colors",
            view === "source"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Source
        </button>
      </div>

      {view === "source" ? (
        <div className="overflow-hidden rounded border">
          <TextDiff
            path={path}
            oldText={oldText}
            newText={newText}
            mode={mode}
            comments={comments}
            actions={actions}
          />
        </div>
      ) : (
        <RenderedRichDiff
          path={path}
          kind={kind}
          oldText={oldText}
          newText={newText}
        />
      )}
    </div>
  );
}

interface RenderedRichDiffProps {
  path: string;
  kind: RichDiffKind;
  oldText: string | null | undefined;
  newText: string | null | undefined;
}

/**
 * Client-only rendered view. Kept behind a mounted flag so SVG sanitization
 * (which needs a DOM) never runs during SSR.
 */
function RenderedRichDiff({
  path,
  kind,
  oldText,
  newText,
}: RenderedRichDiffProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 text-muted-foreground text-sm">
        Loading preview...
      </div>
    );
  }

  const filename = path.split("/").pop() ?? path;
  const hasOld = Boolean(oldText && oldText.length > 0);
  const hasNew = Boolean(newText && newText.length > 0);

  const renderSide = (content: string) =>
    kind === "svg" ? (
      <SvgPreview svg={content} />
    ) : (
      <ReadmeDisplay content={content} filename={filename} />
    );

  // Single side (added or deleted): render just the present content
  if (!hasOld || !hasNew) {
    const content = hasNew ? (newText as string) : (oldText as string);
    return <div>{renderSide(content)}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <figure className="min-w-0">
        <figcaption className="mb-1 text-muted-foreground text-xs">
          Old
        </figcaption>
        {renderSide(oldText as string)}
      </figure>
      <figure className="min-w-0">
        <figcaption className="mb-1 text-muted-foreground text-xs">
          New
        </figcaption>
        {renderSide(newText as string)}
      </figure>
    </div>
  );
}

/**
 * Inline an SVG after sanitizing it with DOMPurify. Never renders untrusted
 * markup: scripts, event handlers and foreignObject are stripped by the SVG
 * profile.
 */
function SvgPreview({ svg }: { svg: string }) {
  const clean = DOMPurify.sanitize(svg, {
    USE_PROFILES: { svg: true, svgFilters: true },
  });

  return (
    <div
      className="flex items-center justify-center overflow-auto rounded border bg-white p-4 [&_svg]:max-w-full"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized with DOMPurify above
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
