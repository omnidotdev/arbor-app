import { Link } from "@tanstack/react-router";

import { FileIcon } from "./FileIcon";

interface TreeEntry {
  path: string;
  mode: string;
  type: "blob" | "tree" | "commit";
  oid: string;
}

interface FileBrowserProps {
  owner: string;
  repo: string;
  branch: string;
  currentPath: string;
  entries: TreeEntry[];
  isLoading?: boolean;
}

/**
 * File browser component displaying repository tree.
 */
export function FileBrowser({
  owner,
  repo,
  branch,
  currentPath,
  entries,
  isLoading,
}: FileBrowserProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border">
        <div className="divide-y">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <p className="text-muted-foreground">This repository is empty</p>
        <p className="mt-2 text-muted-foreground text-sm">
          Push some code to get started
        </p>
      </div>
    );
  }

  // Sort entries: folders first, then files, alphabetically
  const sortedEntries = [...entries].sort((a, b) => {
    if (a.type === "tree" && b.type !== "tree") return -1;
    if (a.type !== "tree" && b.type === "tree") return 1;
    return a.path.localeCompare(b.path);
  });

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="divide-y">
        {sortedEntries.map((entry) => {
          const fullPath = currentPath
            ? `${currentPath}/${entry.path}`
            : entry.path;

          return (
            <Link
              key={entry.oid}
              to="/repositories/$owner/$repo"
              params={{ owner, repo }}
              search={{ ref: branch, path: fullPath }}
              className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
            >
              <FileIcon name={entry.path} type={entry.type} />
              <span className="flex-1 truncate text-sm">{entry.path}</span>
              <span className="font-mono text-muted-foreground text-xs">
                {entry.oid.slice(0, 7)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
