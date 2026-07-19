import { Link } from "@tanstack/react-router";
import {
  Bot,
  GitMerge,
  GitPullRequest,
  MessageSquare,
  User,
} from "lucide-react";

interface PullRequestCardProps {
  id: string;
  number: number;
  title: string;
  state: "open" | "closed" | "merged" | "draft";
  authorName: string;
  agentName?: string;
  sourceBranch: string;
  targetBranch: string;
  createdAt: string;
  commentCount?: number;
  owner: string;
  repo: string;
}

const stateStyles = {
  open: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  closed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  merged:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  draft: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

const stateIcons = {
  open: GitPullRequest,
  closed: GitPullRequest,
  merged: GitMerge,
  draft: GitPullRequest,
};

/**
 * Pull request summary card for list view.
 */
export function PullRequestCard({
  number,
  title,
  state,
  authorName,
  agentName,
  sourceBranch,
  targetBranch,
  createdAt,
  commentCount = 0,
  owner,
  repo,
}: PullRequestCardProps) {
  const StateIcon = stateIcons[state];
  const date = new Date(createdAt);
  const relativeTime = getRelativeTime(date);

  return (
    <Link
      to="/repositories/$owner/$repo/pulls/$number"
      params={{ owner, repo, number: String(number) }}
      className="flex items-start gap-4 border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-muted/50"
    >
      <div className={`mt-1 rounded-full p-1.5 ${stateStyles[state]}`}>
        <StateIcon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="break-words font-medium">{title}</span>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${stateStyles[state]}`}
          >
            {state}
          </span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
          <span>#{number}</span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {authorName}
          </span>
          {agentName && (
            <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
              <Bot className="h-3 w-3" />
              via {agentName}
            </span>
          )}
          <span>
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              {sourceBranch}
            </code>
            {" → "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              {targetBranch}
            </code>
          </span>
          <span>opened {relativeTime}</span>
        </div>
      </div>
      {commentCount > 0 && (
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MessageSquare className="h-4 w-4" />
          <span>{commentCount}</span>
        </div>
      )}
    </Link>
  );
}

function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
