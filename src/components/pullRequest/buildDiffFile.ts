import { generateDiffFile } from "@git-diff-view/file";

import { getFileLang } from "./diffTypes";

import type { DiffFile } from "@git-diff-view/react";

/** Diff view theme, matching the app's light/dark modes. */
export type DiffTheme = "light" | "dark";

/**
 * Build a fully prepared `@git-diff-view` DiffFile for a single file's old/new
 * content, ready to hand to `DiffView`.
 *
 * `@git-diff-view/core`'s DiffFile renders a *provided* unified diff; it does
 * not diff two contents on its own, so constructing it with empty hunks yields
 * a diff with no changes (every line hidden as context) and a blank preview.
 * `generateDiffFile` runs the content diff for us. The split and unified lines
 * are built here because DiffView clones the passed instance via
 * `_getFullBundle`, and the clone renders empty unless those lines exist.
 */
export const buildDiffFile = (
  path: string,
  oldText: string | null | undefined,
  newText: string | null | undefined,
  theme: DiffTheme,
): DiffFile => {
  const lang = getFileLang(path);
  const instance = generateDiffFile(
    path,
    oldText ?? "",
    path,
    newText ?? "",
    lang,
    lang,
  );
  instance.initTheme(theme);
  instance.initRaw();
  instance.buildSplitDiffLines();
  instance.buildUnifiedDiffLines();
  return instance;
};
