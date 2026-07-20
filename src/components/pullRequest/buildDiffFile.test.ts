import { describe, expect, it } from "bun:test";

import { DiffFile } from "@git-diff-view/react";

import { buildDiffFile } from "./buildDiffFile";

/**
 * Regression tests for the text diff builder.
 *
 * Prod bug: commit and pull request file previews rendered blank. The DiffFile
 * was created with `hunks: []`, but `@git-diff-view/core` renders a *provided*
 * unified diff rather than diffing the two contents, so every line was treated
 * as unchanged context, hidden, and the diff body came out empty. These tests
 * assert the builder produces a non-empty, visible diff for real content
 * changes (via `@git-diff-view/file`'s content diff), so the blank never
 * silently returns.
 */
describe("buildDiffFile", () => {
  const OLD = 'export const version = "1.0.0";\nexport const flag = false;\n';
  const NEW =
    'export const version = "2.0.0";\nexport const flag = true;\nexport const added = "yes";\n';

  it("produces visible diff lines for a modified file", () => {
    const file = buildDiffFile("config.js", OLD, NEW, "light");
    const bundle = file._getFullBundle();

    expect(bundle.additionLength).toBe(3);
    expect(bundle.deletionLength).toBe(2);
    expect(bundle.unifiedLineLength).toBeGreaterThan(0);

    const anyHidden = Array.from({ length: bundle.unifiedLineLength }, (_, i) =>
      file.getUnifiedLine(i),
    ).some((line) => line?.isHidden);
    expect(anyHidden).toBe(false);
  });

  it("survives the DiffView clone (split + unified lines are pre-built)", () => {
    const file = buildDiffFile("config.js", OLD, NEW, "light");
    const clone = DiffFileCloneOf(file);

    expect(clone.splitLeftLines?.length).toBeGreaterThan(0);
    expect(clone.splitRightLines?.length).toBeGreaterThan(0);
    expect(clone.unifiedLineLength).toBeGreaterThan(0);
  });

  it("renders a pure addition (new file) one-sided", () => {
    const file = buildDiffFile("added.js", "", NEW, "light");
    const bundle = file._getFullBundle();

    expect(bundle.additionLength).toBe(3);
    expect(bundle.deletionLength).toBe(0);
    expect(bundle.unifiedLineLength).toBeGreaterThan(0);
  });

  it("renders a pure deletion one-sided", () => {
    const file = buildDiffFile("removed.js", OLD, "", "light");
    const bundle = file._getFullBundle();

    expect(bundle.additionLength).toBe(0);
    expect(bundle.deletionLength).toBe(2);
    expect(bundle.unifiedLineLength).toBeGreaterThan(0);
  });
});

/** Reproduce how DiffView consumes the instance: clone via the full bundle. */
const DiffFileCloneOf = (file: ReturnType<typeof buildDiffFile>) =>
  DiffFile.createInstance({}, file._getFullBundle())._getFullBundle();
