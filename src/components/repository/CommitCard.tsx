import { Link } from "@tanstack/react-router";
import { GitCommit } from "lucide-react";

import getRelativeTime from "@/lib/util/getRelativeTime";
import { CommitAuthorAvatar } from "./CommitAuthorAvatar";

interface CommitCardProps {
  sha: string;
  message: string;
  authorName: string;
  authorEmail: string;
  authorDate: string;
  owner: string;
  repo: string;
}

/**
 * Single commit display card, linking to the commit detail view.
 */
export function CommitCard({
  sha,
  message,
  authorName,
  authorDate,
  owner,
  repo,
}: CommitCardProps) {
  const [title, ...bodyLines] = message.split("\n");
  const body = bodyLines.join("\n").trim();
  const shortSha = sha.slice(0, 7);
  const date = new Date(authorDate);
  const relativeTime = getRelativeTime(date);

  return (
    <Link
      to="/@{$workspaceSlug}/$repoSlug/commit/$oid"
      params={{ workspaceSlug: owner, repoSlug: repo, oid: sha }}
      className="flex items-start gap-4 border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-muted/50"
    >
      <div className="mt-1 rounded-full bg-muted p-2">
        <GitCommit className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{title}</p>
        {body && (
          <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
            {body}
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-sm">
          <CommitAuthorAvatar name={authorName} className="size-4" />
          <span className="truncate">{authorName}</span>
          <span>committed {relativeTime}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
          {shortSha}
        </code>
      </div>
    </Link>
  );
}
