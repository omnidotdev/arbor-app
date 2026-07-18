/**
 * Shared types and helpers for the pull request diff review UI.
 */

import type { DiffStatus, PullRequestFilesQuery } from "@/generated/graphql";

/** A single pull request node from the changed-files query. */
export type PullRequestNode = NonNullable<
  PullRequestFilesQuery["pullRequests"]
>["nodes"][number];

/** A single changed file entry within a pull request. */
export type ChangedFile = PullRequestNode["changedFiles"][number];

interface DiffStatusMeta {
  /** Single-letter badge label, matching common git status codes. */
  label: string;
  /** Human readable status name. */
  title: string;
  /** Tailwind classes for the badge. */
  className: string;
}

/**
 * Presentation metadata for each diff status.
 */
export const diffStatusMeta: Record<DiffStatus, DiffStatusMeta> = {
  ADDED: {
    label: "A",
    title: "Added",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  DELETED: {
    label: "D",
    title: "Deleted",
    className: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  },
  MODIFIED: {
    label: "M",
    title: "Modified",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  },
  RENAMED: {
    label: "R",
    title: "Renamed",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  COPIED: {
    label: "C",
    title: "Copied",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  TYPE_CHANGED: {
    label: "T",
    title: "Type changed",
    className: "bg-muted text-muted-foreground",
  },
};

/**
 * Map a file extension to a highlight language understood by the diff view.
 * Falls back to plaintext for unknown extensions.
 */
const extensionToLang: Record<string, string> = {
  ts: "typescript",
  tsx: "tsx",
  mts: "typescript",
  cts: "typescript",
  js: "javascript",
  jsx: "jsx",
  mjs: "javascript",
  cjs: "javascript",
  json: "json",
  css: "css",
  scss: "scss",
  less: "less",
  html: "xml",
  xml: "xml",
  svg: "xml",
  vue: "vue",
  md: "markdown",
  markdown: "markdown",
  py: "python",
  rb: "ruby",
  go: "go",
  rs: "rust",
  java: "java",
  kt: "kotlin",
  swift: "swift",
  c: "c",
  h: "c",
  cpp: "cpp",
  cc: "cpp",
  hpp: "cpp",
  cs: "csharp",
  php: "php",
  sh: "bash",
  bash: "bash",
  zsh: "bash",
  sql: "sql",
  yml: "yaml",
  yaml: "yaml",
  toml: "ini",
  ini: "ini",
  graphql: "graphql",
  gql: "graphql",
  dockerfile: "dockerfile",
  lua: "lua",
  r: "r",
  dart: "dart",
  scala: "scala",
  pl: "perl",
};

/**
 * Derive a syntax highlight language from a file path.
 */
export const getFileLang = (path: string): string => {
  const name = path.split("/").pop() ?? path;
  if (name.toLowerCase() === "dockerfile") return "dockerfile";
  const ext = name.includes(".") ? name.split(".").pop() : undefined;
  if (!ext) return "plaintext";
  return extensionToLang[ext.toLowerCase()] ?? "plaintext";
};

/** File kinds that render a source vs rendered rich diff toggle. */
export type RichDiffKind = "markdown" | "svg";

/**
 * Detect whether a file should render as a rich diff (source vs rendered
 * toggle). Markdown and SVG both have a meaningful rendered form.
 */
export const getRichDiffKind = (path: string): RichDiffKind | null => {
  const ext = path.split(".").pop()?.toLowerCase();
  if (ext === "md" || ext === "markdown") return "markdown";
  if (ext === "svg") return "svg";
  return null;
};

/**
 * Build a same-origin proxy URL for a file's raw bytes at a given git oid.
 * Returns null when the oid is absent (added files have no old side, deleted
 * files have no new side).
 */
export const rawProxyUrl = (
  owner: string,
  repo: string,
  oid: string | null | undefined,
  path: string,
): string | null => {
  if (!oid) return null;
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return `/api/raw/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/${encodeURIComponent(oid)}/${encodedPath}`;
};
