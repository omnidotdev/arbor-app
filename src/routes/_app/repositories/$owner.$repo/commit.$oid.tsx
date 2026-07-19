import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import { GitBranch, GitCommit, GitFork, GitPullRequest } from "lucide-react";
import { useState } from "react";

import { useDiffViewMode } from "@/components/pullRequest";
import {
  CommitAuthorAvatar,
  CommitFileDiffCard,
} from "@/components/repository";
import { Button } from "@/components/ui/button";
import commitDetailOptions from "@/lib/options/commitDetail.options";
import getRelativeTime from "@/lib/util/getRelativeTime";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/commit/$oid",
)({
  component: CommitDetailPage,
});

/** Deterministic DOM id for a file's diff card, used for scroll-to. */
const anchorIdFor = (path: string) => `file-diff:${path}`;

function CommitDetailPage() {
  const { owner, repo, oid } = Route.useParams();

  const [mode, setMode] = useDiffViewMode();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const commitQuery = useQuery(
    commitDetailOptions({ ownerSlug: owner, repoSlug: repo, oid }),
  );

  const commit = commitQuery.data?.repositories?.nodes?.[0]?.commit;
  const changedFiles = commit?.changedFiles ?? [];
  const parentOid = commit?.parents?.[0]?.oid;

  const [messageHeadline, ...bodyLines] = (commit?.message ?? "").split("\n");
  const body = bodyLines.join("\n").trim();
  const shortSha = oid.slice(0, 7);
  const committedDate = commit?.committedDate
    ? new Date(commit.committedDate)
    : null;

  const isExpanded = (path: string) => !collapsed[path];
  const toggleExpanded = (path: string) =>
    setCollapsed((prev) => ({ ...prev, [path]: !prev[path] }));

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6">
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
          search={{ ref: undefined }}
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
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
      </div>

      {commitQuery.isLoading ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          Loading commit...
        </div>
      ) : !commit ? (
        <div className="rounded-lg border p-8 text-center">
          <GitCommit className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 font-semibold text-xl">Commit not found</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            This commit does not exist or you do not have access to it.
          </p>
          <Link
            to="/repositories/$owner/$repo/commits"
            params={{ owner, repo }}
            search={{ ref: undefined }}
            className="mt-4 inline-block text-primary-600 text-sm hover:underline dark:text-primary-400"
          >
            Back to commits
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Commit metadata */}
          <div className="rounded-lg border">
            <div className="border-b px-4 py-3">
              <h2 className="break-words font-semibold text-lg">
                {messageHeadline}
              </h2>
              {body && (
                <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-muted-foreground text-sm">
                  {body}
                </pre>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 text-muted-foreground text-sm">
              <span className="flex items-center gap-1.5">
                <CommitAuthorAvatar
                  name={commit.author?.name}
                  className="size-6"
                />
                <strong className="text-foreground">
                  {commit.author?.name ?? "Unknown"}
                </strong>
                committed
                {committedDate && <span>{getRelativeTime(committedDate)}</span>}
              </span>
              <span className="flex items-center gap-1.5">
                commit
                <code className="rounded bg-muted px-2 py-0.5 font-mono text-foreground text-xs">
                  {shortSha}
                </code>
              </span>
              {parentOid && (
                <span className="flex items-center gap-1.5">
                  parent
                  <Link
                    to="/repositories/$owner/$repo/commit/$oid"
                    params={{ owner, repo, oid: parentOid }}
                    className="rounded bg-muted px-2 py-0.5 font-mono text-primary-600 text-xs hover:underline dark:text-primary-400"
                  >
                    {parentOid.slice(0, 7)}
                  </Link>
                </span>
              )}
            </div>
          </div>

          {/* Files changed */}
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-semibold text-lg">
                Files changed
                <span className="ml-2 font-normal text-muted-foreground text-sm">
                  {changedFiles.length}
                </span>
              </h2>
              <div className="flex items-center rounded-md border">
                <Button
                  variant={mode === "unified" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-r-none"
                  onClick={() => setMode("unified")}
                >
                  Unified
                </Button>
                <Button
                  variant={mode === "split" ? "secondary" : "ghost"}
                  size="sm"
                  className="rounded-l-none border-l"
                  onClick={() => setMode("split")}
                >
                  Split
                </Button>
              </div>
            </div>

            {changedFiles.length === 0 ? (
              <div className="rounded-lg border p-8 text-center text-muted-foreground">
                No file changes in this commit.
              </div>
            ) : (
              <div className="space-y-4">
                {changedFiles.map((file) => (
                  <CommitFileDiffCard
                    key={file.path}
                    file={file}
                    owner={owner}
                    repo={repo}
                    oid={oid}
                    anchorId={anchorIdFor(file.path)}
                    expanded={isExpanded(file.path)}
                    onToggleExpanded={() => toggleExpanded(file.path)}
                    mode={mode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
