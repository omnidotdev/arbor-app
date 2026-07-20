import { describe, expect, it } from "bun:test";

import { DiffFile } from "@git-diff-view/react";

import { textDiffFixtures } from "./__fixtures__/diffPreview";
import { buildDiffFile } from "./buildDiffFile";

/**
 * Regression tests for the text diff builder, driven by the real
 * `claude/diff-preview-check` preview fixture.
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
  describe.each(textDiffFixtures)("preview fixture: $path", ({
    path,
    oldText,
    newText,
    additions,
    deletions,
  }) => {
    it("produces the expected visible diff lines", () => {
      const file = buildDiffFile(path, oldText, newText, "light");
      const bundle = file._getFullBundle();

      expect(bundle.additionLength).toBe(additions);
      expect(bundle.deletionLength).toBe(deletions);
      expect(bundle.unifiedLineLength).toBeGreaterThan(0);

      const changedLinesHidden = Array.from(
        { length: bundle.unifiedLineLength },
        (_, i) => file.getUnifiedLine(i),
      ).some((line) => line?.isHidden);
      expect(changedLinesHidden).toBe(false);
    });

    it("survives the DiffView clone (split + unified lines pre-built)", () => {
      const file = buildDiffFile(path, oldText, newText, "light");
      const clone = DiffFileCloneOf(file);

      expect(clone.splitLeftLines?.length).toBeGreaterThan(0);
      expect(clone.splitRightLines?.length).toBeGreaterThan(0);
      expect(clone.unifiedLineLength).toBeGreaterThan(0);
    });
  });

  it("renders a pure addition (new file) one-sided", () => {
    const { path, newText, additions } = textDiffFixtures[0];
    const file = buildDiffFile(path, "", newText, "light");
    const bundle = file._getFullBundle();

    expect(bundle.additionLength).toBe(additions);
    expect(bundle.deletionLength).toBe(0);
    expect(bundle.unifiedLineLength).toBeGreaterThan(0);
  });

  it("renders a pure deletion one-sided", () => {
    const { path, oldText, deletions } = textDiffFixtures[0];
    const file = buildDiffFile(path, oldText, "", "light");
    const bundle = file._getFullBundle();

    expect(bundle.additionLength).toBe(0);
    expect(bundle.deletionLength).toBe(deletions);
    expect(bundle.unifiedLineLength).toBeGreaterThan(0);
  });
});

/** Reproduce how DiffView consumes the instance: clone via the full bundle. */
const DiffFileCloneOf = (file: ReturnType<typeof buildDiffFile>) =>
  DiffFile.createInstance({}, file._getFullBundle())._getFullBundle();
