"use client";

import { TreeView } from "@omnidotdev/thornberry/tree-view";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { diffStatusMeta } from "./diffTypes";

import type { TreeViewNode } from "@omnidotdev/thornberry/tree-view";
import type { CSSProperties } from "react";
import type { ChangedFile } from "./diffTypes";

interface TreeFileNode {
  type: "file";
  name: string;
  path: string;
  file: ChangedFile;
}

interface TreeDirNode {
  type: "dir";
  name: string;
  /** Full directory path, unique across the tree. */
  path: string;
  children: TreeNode[];
}

type TreeNode = TreeFileNode | TreeDirNode;

/** Prefix for directory node ids, so they never collide with file paths. */
const DIR_ID_PREFIX = "dir:";

/**
 * Build a nested tree from a flat list of changed files.
 */
const buildTree = (files: ChangedFile[]): TreeNode[] => {
  const root: TreeDirNode = { type: "dir", name: "", path: "", children: [] };

  for (const file of files) {
    const segments = file.path.split("/");
    let current = root;
    segments.forEach((segment, index) => {
      const isLeaf = index === segments.length - 1;
      if (isLeaf) {
        current.children.push({
          type: "file",
          name: segment,
          path: file.path,
          file,
        });
        return;
      }
      let dir = current.children.find(
        (child): child is TreeDirNode =>
          child.type === "dir" && child.name === segment,
      );
      if (!dir) {
        dir = {
          type: "dir",
          name: segment,
          path: segments.slice(0, index + 1).join("/"),
          children: [],
        };
        current.children.push(dir);
      }
      current = dir;
    });
  }

  return sortAndCompress(root.children);
};

/**
 * Sort folders before files (alphabetically) and compress single-child
 * directory chains, matching GitHub's file tree ordering.
 */
const sortAndCompress = (nodes: TreeNode[]): TreeNode[] => {
  const sorted = [...nodes].sort((a, b) => {
    if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return sorted.map((node) => {
    if (node.type !== "dir") return node;
    let dir = node;
    // collapse a directory that contains only a single subdirectory
    while (dir.children.length === 1 && dir.children[0]?.type === "dir") {
      const child = dir.children[0] as TreeDirNode;
      dir = {
        type: "dir",
        name: `${dir.name}/${child.name}`,
        path: child.path,
        children: child.children,
      };
    }
    return { ...dir, children: sortAndCompress(dir.children) };
  });
};

/**
 * Trailing status badge, add/delete counts, and viewed check for a file row.
 */
function FileSuffix({ file, viewed }: { file: ChangedFile; viewed: boolean }) {
  const meta = diffStatusMeta[file.status];

  return (
    <span className="flex shrink-0 items-center gap-1.5">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded font-medium text-[10px]",
          meta.className,
        )}
        title={meta.title}
      >
        {meta.label}
      </span>
      <span className="flex shrink-0 items-center gap-1 text-[11px] tabular-nums">
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
      {viewed && (
        <Check
          data-viewed=""
          aria-label="Viewed"
          className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400"
        />
      )}
    </span>
  );
}

/**
 * Convert the internal tree into thornberry tree view nodes, collecting every
 * directory id along the way.
 */
const toTreeViewNodes = (
  nodes: TreeNode[],
  isViewed: (path: string) => boolean,
  branchIds: string[],
): TreeViewNode[] =>
  nodes.map((node) => {
    if (node.type === "dir") {
      const id = `${DIR_ID_PREFIX}${node.path}`;
      branchIds.push(id);
      return {
        id,
        label: node.name,
        children: toTreeViewNodes(node.children, isViewed, branchIds),
      };
    }

    return {
      id: node.path,
      label: node.name,
      suffix: <FileSuffix file={node.file} viewed={isViewed(node.path)} />,
    };
  });

// Viewed files strike through their name, keyed off the viewed check in the
// row's suffix since thornberry renders the label text itself
const viewedRowClassName =
  "[&_[data-part=item]:has([data-viewed])_[data-part=item-text]]:text-muted-foreground [&_[data-part=item]:has([data-viewed])_[data-part=item-text]]:line-through";

// Match the previous 12px indent step
const treeIndentStyle = { "--tree-indent": "0.75rem" } as CSSProperties;

interface ChangedFileTreeProps {
  files: ChangedFile[];
  isViewed: (path: string) => boolean;
  onSelectFile: (path: string) => void;
}

/**
 * Sidebar tree of changed files. Folders render before files at each level.
 * Selecting a file scrolls to and expands its diff card.
 */
export function ChangedFileTree({
  files,
  isViewed,
  onSelectFile,
}: ChangedFileTreeProps) {
  // track collapsed folders rather than expanded ones, so folders that appear
  // later (e.g. after a refetch) start open like the initial ones
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set());

  const { nodes, branchIds } = useMemo(() => {
    const ids: string[] = [];
    return {
      nodes: toTreeViewNodes(buildTree(files), isViewed, ids),
      branchIds: ids,
    };
  }, [files, isViewed]);

  return (
    <nav aria-label="Changed files" className="text-sm">
      <TreeView
        aria-label="Changed files"
        nodes={nodes}
        fileIcons
        className={viewedRowClassName}
        style={treeIndentStyle}
        expandedValue={branchIds.filter((id) => !collapsed.has(id))}
        onExpandedChange={({ expandedValue }) =>
          setCollapsed(
            new Set(branchIds.filter((id) => !expandedValue.includes(id))),
          )
        }
        // keep selection empty so every click (including a repeat click on
        // the same file) fires, matching the previous jump-to-file behavior
        selectedValue={[]}
        onSelectionChange={({ selectedValue }) => {
          const [id] = selectedValue;
          if (id && !id.startsWith(DIR_ID_PREFIX)) onSelectFile(id);
        }}
      />
    </nav>
  );
}
