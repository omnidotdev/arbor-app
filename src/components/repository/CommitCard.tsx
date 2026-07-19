import { GitCommit, User } from "lucide-react";

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
 * Single commit display card.
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
    <div className="flex items-start gap-4 border-b px-4 py-3 last:border-b-0">
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
          <User className="h-3 w-3 shrink-0" />
          <span className="truncate">{authorName}</span>
          <span>committed {relativeTime}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
          {shortSha}
        </code>
      </div>
    </div>
  );
}

/**
 * Get relative time string from date.
 */
function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
  if (diffMonths > 0)
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  if (diffWeeks > 0) return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffMins > 0) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  return "just now";
}
