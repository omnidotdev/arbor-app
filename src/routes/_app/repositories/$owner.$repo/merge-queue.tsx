import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Layers,
  ListChecks,
} from "lucide-react";

import mergeQueueEntriesOptions from "@/lib/options/mergeQueueEntries.options";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/merge-queue",
)({
  component: MergeQueuePage,
});

const stateStyles: Record<string, string> = {
  queued: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  testing: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  optimistic:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  merged:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  evicted: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

function stateStyle(state: string): string {
  return (
    stateStyles[state] ??
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  );
}

function MergeQueuePage() {
  const { owner, repo } = Route.useParams();

  const entriesQuery = useQuery(
    mergeQueueEntriesOptions({ ownerSlug: owner, repoSlug: repo }),
  );
  const entries = entriesQuery.data?.mergeQueueEntries?.nodes ?? [];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bold text-2xl">
          <Link
            to="/repositories"
            search={{ owner }}
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            {owner}
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link
            to="/repositories/$owner/$repo"
            params={{ owner, repo }}
            className="hover:underline"
          >
            {repo}
          </Link>
        </h1>
      </div>

      {/* Navigation tabs */}
      <div className="mb-6 flex gap-6 overflow-x-auto border-b [&>*]:shrink-0">
        <Link
          to="/repositories/$owner/$repo"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitBranch className="h-4 w-4" />
          Code
        </Link>
        <Link
          to="/repositories/$owner/$repo/commits"
          params={{ owner, repo }}
          search={{ ref: "master" }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitCommit className="h-4 w-4" />
          Commits
        </Link>
        <Link
          to="/repositories/$owner/$repo/branches"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitFork className="h-4 w-4" />
          Branches
        </Link>
        <Link
          to="/repositories/$owner/$repo/pulls"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitPullRequest className="h-4 w-4" />
          Pull Requests
        </Link>
        <Link
          to="/repositories/$owner/$repo/stacks"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <Layers className="h-4 w-4" />
          Stacks
        </Link>
        <Link
          to="/repositories/$owner/$repo/merge-queue"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
        >
          <ListChecks className="h-4 w-4" />
          Merge queue
        </Link>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-xl">Merge queue</h2>
        <p className="mt-1 text-muted-foreground text-sm">
          Stacks and pull requests waiting to land, in queue order.
        </p>
      </div>

      {entriesQuery.isError ? (
        <div className="rounded-lg border p-8 text-center">
          <ListChecks className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Unable to load the merge queue</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      ) : entriesQuery.isLoading ? (
        <div className="space-y-3">
          <div className="h-16 animate-pulse rounded-lg bg-muted" />
          <div className="h-16 animate-pulse rounded-lg bg-muted" />
        </div>
      ) : entries.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <ListChecks className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">The merge queue is empty</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Stacks and pull requests appear here once they are queued to land.
          </p>
        </div>
      ) : (
        <ol className="divide-y rounded-lg border">
          {entries.map((entry) => (
            <li
              key={entry.rowId}
              className="flex items-start gap-4 px-4 py-3 first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted font-mono text-xs">
                {entry.position}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {entry.stack ? (
                    <Link
                      to="/repositories/$owner/$repo/stacks/$stackId"
                      params={{ owner, repo, stackId: entry.stack.rowId }}
                      className="break-words font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      {entry.stack.title}
                    </Link>
                  ) : entry.pullRequest ? (
                    <Link
                      to="/repositories/$owner/$repo/pulls/$number"
                      params={{
                        owner,
                        repo,
                        number: String(entry.pullRequest.number),
                      }}
                      className="break-words font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      {entry.pullRequest.title}
                    </Link>
                  ) : (
                    <span className="break-words font-medium">Queue entry</span>
                  )}
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${stateStyle(entry.state)}`}
                  >
                    {entry.state}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
                  {entry.pullRequest && (
                    <span>#{entry.pullRequest.number}</span>
                  )}
                  <span>
                    into{" "}
                    <code className="rounded bg-muted px-1 py-0.5 text-xs">
                      {entry.targetBranch}
                    </code>
                  </span>
                  {entry.batch?.ciStatus && (
                    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs capitalize">
                      batch {entry.batch.ciStatus}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
