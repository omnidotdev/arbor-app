/**
 * Real diff-preview fixture, captured from the `claude/diff-preview-check`
 * repository (commit `3220c8c`) used to reproduce and verify the blank-diff
 * bug. The commit changes two text files and swaps an image in one go, so it
 * exercises the text diff (add + delete + context) and image diff paths that
 * a file preview must render.
 *
 * Keeping the exact content here lets tests assert the preview renders visible
 * diff lines without a live server, guarding against the regression where the
 * diff body came out blank.
 */

/** A single text file's before/after content within the fixture commit. */
export interface TextDiffFixture {
  path: string;
  oldText: string;
  newText: string;
  /** Expected added / deleted line counts for this change. */
  additions: number;
  deletions: number;
}

export const textDiffFixtures: TextDiffFixture[] = [
  {
    path: "config.js",
    oldText: 'export const version = "1.0.0";\nexport const flag = false;\n',
    newText:
      'export const version = "2.0.0";\nexport const flag = true;\nexport const added = "yes";\n',
    additions: 3,
    deletions: 2,
  },
  {
    path: "hello.txt",
    oldText: "line one\nline two\nline three\nline four\n",
    newText:
      "line one changed\nline two\na brand new line\nline three\nline four\n",
    additions: 2,
    deletions: 1,
  },
];

/**
 * The image the fixture commit swaps (blue 64x64 -> red 96x96). Rendered by
 * ImageDiff, not the text diff, but recorded here so the fixture documents the
 * whole preview.
 */
export const imageDiffFixture = {
  path: "logo.png",
  oldDimensions: { width: 64, height: 64 },
  newDimensions: { width: 96, height: 96 },
};
