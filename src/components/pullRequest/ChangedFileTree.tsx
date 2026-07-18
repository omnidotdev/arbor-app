"use client";

import { Check, ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { diffStatusMeta } from "./diffTypes";

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
  children: TreeNode[];
}

type TreeNode = TreeFileNode | TreeDirNode;

/**
 * Build a nested tree from a flat list of changed files.
 */
const buildTree = (files: ChangedFile[]): TreeNode[] => {
  const root: TreeDirNode = { type: "dir", name: "", children: [] };

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
        dir = { type: "dir", name: segment, children: [] };
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
        children: child.children,
      };
    }
    return { ...dir, children: sortAndCompress(dir.children) };
  });
};

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
  const tree = buildTree(files);

  return (
    <nav aria-label="Changed files" className="text-sm">
      <TreeLevel
        nodes={tree}
        depth={0}
        isViewed={isViewed}
        onSelectFile={onSelectFile}
      />
    </nav>
  );
}

interface TreeLevelProps {
  nodes: TreeNode[];
  depth: number;
  isViewed: (path: string) => boolean;
  onSelectFile: (path: string) => void;
}

function TreeLevel({ nodes, depth, isViewed, onSelectFile }: TreeLevelProps) {
  return (
    <ul>
      {nodes.map((node) =>
        node.type === "dir" ? (
          <TreeDir
            key={`dir:${node.name}`}
            node={node}
            depth={depth}
            isViewed={isViewed}
            onSelectFile={onSelectFile}
          />
        ) : (
          <TreeFile
            key={node.path}
            node={node}
            depth={depth}
            viewed={isViewed(node.path)}
            onSelectFile={onSelectFile}
          />
        ),
      )}
    </ul>
  );
}

function TreeDir({
  node,
  depth,
  isViewed,
  onSelectFile,
}: {
  node: TreeDirNode;
  depth: number;
  isViewed: (path: string) => boolean;
  onSelectFile: (path: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-muted-foreground hover:bg-accent hover:text-foreground"
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {open ? (
          <ChevronDown className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        )}
        <Folder className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate">{node.name}</span>
      </button>
      {open && (
        <TreeLevel
          nodes={node.children}
          depth={depth + 1}
          isViewed={isViewed}
          onSelectFile={onSelectFile}
        />
      )}
    </li>
  );
}

function TreeFile({
  node,
  depth,
  viewed,
  onSelectFile,
}: {
  node: TreeFileNode;
  depth: number;
  viewed: boolean;
  onSelectFile: (path: string) => void;
}) {
  const meta = diffStatusMeta[node.file.status];

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelectFile(node.path)}
        className="flex w-full items-center gap-1.5 rounded px-2 py-1 text-left hover:bg-accent"
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        <File className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span
          className={cn(
            "truncate",
            viewed && "text-muted-foreground line-through",
          )}
        >
          {node.name}
        </span>
        <span
          className={cn(
            "ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded font-medium text-[10px]",
            meta.className,
          )}
          title={meta.title}
        >
          {meta.label}
        </span>
        <span className="flex shrink-0 items-center gap-1 text-[11px] tabular-nums">
          {node.file.additions > 0 && (
            <span className="text-green-600 dark:text-green-400">
              +{node.file.additions}
            </span>
          )}
          {node.file.deletions > 0 && (
            <span className="text-red-600 dark:text-red-400">
              -{node.file.deletions}
            </span>
          )}
        </span>
        {viewed && (
          <Check className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400" />
        )}
      </button>
    </li>
  );
}
