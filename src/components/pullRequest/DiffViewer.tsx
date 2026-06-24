"use client";

import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";

interface DiffViewerProps {
  oldValue: string;
  newValue: string;
  oldTitle?: string;
  newTitle?: string;
  splitView?: boolean;
}

/**
 * Diff viewer component for comparing file changes.
 */
export function DiffViewer({
  oldValue,
  newValue,
  oldTitle,
  newTitle,
  splitView = true,
}: DiffViewerProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <ReactDiffViewer
        oldValue={oldValue}
        newValue={newValue}
        splitView={splitView}
        leftTitle={oldTitle}
        rightTitle={newTitle}
        compareMethod={DiffMethod.WORDS}
        useDarkTheme
        styles={{
          variables: {
            dark: {
              diffViewerBackground: "hsl(var(--background))",
              addedBackground: "rgba(46, 160, 67, 0.15)",
              addedColor: "hsl(var(--foreground))",
              removedBackground: "rgba(248, 81, 73, 0.15)",
              removedColor: "hsl(var(--foreground))",
              wordAddedBackground: "rgba(46, 160, 67, 0.4)",
              wordRemovedBackground: "rgba(248, 81, 73, 0.4)",
              addedGutterBackground: "rgba(46, 160, 67, 0.2)",
              removedGutterBackground: "rgba(248, 81, 73, 0.2)",
              gutterBackground: "hsl(var(--muted))",
              gutterBackgroundDark: "hsl(var(--muted))",
              codeFoldBackground: "hsl(var(--muted))",
              emptyLineBackground: "hsl(var(--background))",
            },
          },
          contentText: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
            fontSize: "13px",
          },
          line: {
            padding: "0 10px",
          },
          gutter: {
            padding: "0 10px",
            minWidth: "40px",
          },
        }}
      />
    </div>
  );
}
