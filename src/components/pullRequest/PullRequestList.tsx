import { GitPullRequest } from "lucide-react";

import { PullRequestCard } from "./PullRequestCard";

interface PullRequest {
  id: string;
  number: number;
  title: string;
  state: "open" | "closed" | "merged" | "draft";
  authorName: string;
  sourceBranch: string;
  targetBranch: string;
  createdAt: string;
  commentCount?: number;
}

interface PullRequestListProps {
  pullRequests: PullRequest[];
  owner: string;
  repo: string;
  isLoading?: boolean;
}

/**
 * List of pull requests.
 */
export function PullRequestList({
  pullRequests,
  owner,
  repo,
  isLoading,
}: PullRequestListProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-start gap-4 border-b px-4 py-3 last:border-b-0"
          >
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (pullRequests.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <GitPullRequest className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 font-medium">No pull requests yet</h3>
        <p className="mt-1 text-muted-foreground text-sm">
          Create a pull request to propose and collaborate on changes.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      {pullRequests.map((pr) => (
        <PullRequestCard
          key={pr.id}
          id={pr.id}
          number={pr.number}
          title={pr.title}
          state={pr.state}
          authorName={pr.authorName}
          sourceBranch={pr.sourceBranch}
          targetBranch={pr.targetBranch}
          createdAt={pr.createdAt}
          commentCount={pr.commentCount}
          owner={owner}
          repo={repo}
        />
      ))}
    </div>
  );
}
