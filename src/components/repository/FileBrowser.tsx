import { Link } from "@tanstack/react-router";

import getRelativeTime from "@/lib/util/getRelativeTime";
import { FileIcon } from "./FileIcon";

interface TreeEntry {
  path: string;
  mode: string;
  type: "blob" | "tree" | "commit";
  oid: string;
}

interface TreeEntryCommit {
  path: string;
  commitOid: string;
  messageHeadline: string;
  committedDate: string;
  authorName: string;
}

interface FileBrowserProps {
  owner: string;
  repo: string;
  branch: string;
  currentPath: string;
  entries: TreeEntry[];
  isLoading?: boolean;
  /** Last commit that touched each entry, keyed by entry basename */
  commitsByPath?: Map<string, TreeEntryCommit>;
  commitsLoading?: boolean;
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
  commitsByPath,
  commitsLoading,
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
          const lastCommit = commitsByPath?.get(entry.path);

          return (
            <div
              key={entry.oid}
              className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-muted/50"
            >
              <Link
                to="/repositories/$owner/$repo"
                params={{ owner, repo }}
                search={{ ref: branch, path: fullPath }}
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <FileIcon name={entry.path} type={entry.type} />
                <span className="truncate text-sm">{entry.path}</span>
              </Link>

              {/* Last commit that touched this entry: message headline + time */}
              <div className="hidden min-w-0 max-w-[45%] flex-1 items-center justify-end gap-3 sm:flex">
                {lastCommit ? (
                  <>
                    <Link
                      to="/repositories/$owner/$repo/commit/$oid"
                      params={{ owner, repo, oid: lastCommit.commitOid }}
                      className="min-w-0 truncate text-muted-foreground text-xs hover:text-primary-600 hover:underline dark:hover:text-primary-400"
                      title={lastCommit.messageHeadline}
                    >
                      {lastCommit.messageHeadline}
                    </Link>
                    <span className="shrink-0 text-muted-foreground text-xs">
                      {getRelativeTime(new Date(lastCommit.committedDate))}
                    </span>
                  </>
                ) : commitsLoading ? (
                  <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
