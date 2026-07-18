"use client";

import { DiffModeEnum, DiffView } from "@git-diff-view/react";
import { useEffect, useState } from "react";

import { useTheme } from "@/providers/ThemeProvider";
import { getFileLang } from "./diffTypes";

import type { DiffViewMode } from "./useDiffViewMode";

import "@git-diff-view/react/styles/diff-view.css";

interface TextDiffProps {
  path: string;
  oldText: string | null | undefined;
  newText: string | null | undefined;
  mode: DiffViewMode;
}

/**
 * Text diff for a single file, wrapping `@git-diff-view/react`.
 * The underlying view builds its diff on the client (in an effect), so this is
 * gated behind a mounted flag to keep server and first client render identical.
 */
export function TextDiff({ path, oldText, newText, mode }: TextDiffProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 text-muted-foreground text-sm">Loading diff...</div>
    );
  }

  const lang = getFileLang(path);

  return (
    <div className="overflow-x-auto text-sm">
      <DiffView
        data={{
          oldFile: { fileName: path, fileLang: lang, content: oldText ?? "" },
          newFile: { fileName: path, fileLang: lang, content: newText ?? "" },
          hunks: [],
        }}
        diffViewMode={
          mode === "split" ? DiffModeEnum.Split : DiffModeEnum.Unified
        }
        diffViewTheme={theme === "dark" ? "dark" : "light"}
        diffViewHighlight
        diffViewWrap
      />
    </div>
  );
}
