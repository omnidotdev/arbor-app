import { Link } from "@tanstack/react-router";

import getRelativeTime from "@/lib/util/getRelativeTime";
import { CommitAuthorAvatar } from "./CommitAuthorAvatar";

interface LatestCommitBarProps {
  owner: string;
  repo: string;
  oid: string;
  messageHeadline: string;
  authorName?: string | null;
  committedDate?: string | null;
}

/**
 * GitHub-style bar showing the default branch's HEAD commit above the file
 * browser: author, the clickable message headline, a clickable short sha and a
 * relative timestamp.
 */
export function LatestCommitBar({
  owner,
  repo,
  oid,
  messageHeadline,
  authorName,
  committedDate,
}: LatestCommitBarProps) {
  const shortSha = oid.slice(0, 7);
  const relativeTime = committedDate
    ? getRelativeTime(new Date(committedDate))
    : null;

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-4 py-2.5 text-sm">
      <span className="flex shrink-0 items-center gap-1.5 text-muted-foreground">
        <CommitAuthorAvatar name={authorName} />
        {authorName && (
          <span className="max-w-32 truncate font-medium text-foreground">
            {authorName}
          </span>
        )}
      </span>

      <Link
        to="/repositories/$owner/$repo/commit/$oid"
        params={{ owner, repo, oid }}
        className="min-w-0 flex-1 truncate text-foreground hover:text-primary-600 hover:underline dark:hover:text-primary-400"
        title={messageHeadline}
      >
        {messageHeadline}
      </Link>

      <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
        <Link
          to="/repositories/$owner/$repo/commit/$oid"
          params={{ owner, repo, oid }}
          className="rounded bg-muted px-2 py-0.5 font-mono text-primary-600 text-xs hover:underline dark:text-primary-400"
        >
          {shortSha}
        </Link>
        {relativeTime && (
          <span className="hidden text-xs sm:inline">{relativeTime}</span>
        )}
      </div>
    </div>
  );
}
