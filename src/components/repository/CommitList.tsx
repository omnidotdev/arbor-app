import { CommitCard } from "./CommitCard";

interface Commit {
  sha: string;
  message: string;
  authorName: string;
  authorEmail: string;
  authorDate: string;
}

interface CommitListProps {
  commits: Commit[];
  owner: string;
  repo: string;
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

/**
 * Paginated commit history list.
 */
export function CommitList({
  commits,
  owner,
  repo,
  isLoading,
  hasMore,
  onLoadMore,
}: CommitListProps) {
  if (isLoading && commits.length === 0) {
    return (
      <div className="rounded-lg border">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-start gap-4 border-b px-4 py-3 last:border-b-0"
          >
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
            </div>
            <div className="h-6 w-16 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    );
  }

  if (commits.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <p className="text-muted-foreground">No commits yet</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      {commits.map((commit) => (
        <CommitCard
          key={commit.sha}
          sha={commit.sha}
          message={commit.message}
          authorName={commit.authorName}
          authorEmail={commit.authorEmail}
          authorDate={commit.authorDate}
          owner={owner}
          repo={repo}
        />
      ))}
      {hasMore && (
        <div className="border-t px-4 py-3 text-center">
          <button
            type="button"
            onClick={onLoadMore}
            disabled={isLoading}
            className="text-primary-600 text-sm hover:underline disabled:opacity-50 dark:text-primary-400"
          >
            {isLoading ? "Loading..." : "Load more commits"}
          </button>
        </div>
      )}
    </div>
  );
}
