import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import { GitBranch, GitCommit, GitFork, GitPullRequest } from "lucide-react";
import { useState } from "react";

import {
  ChangedFileTree,
  FileDiffCard,
  PullRequestConversation,
  PullRequestDetail,
  ReviewSummaryBar,
  useDiffViewMode,
  useViewedFiles,
} from "@/components/pullRequest";
import { Button } from "@/components/ui/button";
import { usePullRequestCommentSubscription } from "@/lib/hooks/usePullRequestCommentSubscription";
import { usePullRequestConversation } from "@/lib/hooks/usePullRequestConversation";
import pullRequestFilesOptions from "@/lib/options/pullRequestFiles.options";

import type { PullRequestComment } from "@/components/pullRequest/reviewTypes";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/pulls/$number",
)({
  component: PullRequestDetailPage,
});

/** Deterministic DOM id for a file's diff card, used for scroll-to. */
const anchorIdFor = (path: string) => `file-diff:${path}`;

const KNOWN_STATES = ["open", "closed", "merged", "draft"] as const;
type PullRequestState = (typeof KNOWN_STATES)[number];

const normalizeState = (state: string): PullRequestState =>
  (KNOWN_STATES as readonly string[]).includes(state)
    ? (state as PullRequestState)
    : "open";

function PullRequestDetailPage() {
  const { owner, repo, number: numberParam } = Route.useParams();
  const { session } = Route.useRouteContext();
  const currentUserId = session?.user?.rowId;
  const number = Number(numberParam);

  const [mode, setMode] = useDiffViewMode();
  const [expandedOverrides, setExpandedOverrides] = useState<
    Record<string, boolean>
  >({});

  const pullRequestQuery = useQuery(
    pullRequestFilesOptions({ ownerSlug: owner, repoSlug: repo, number }),
  );

  const pullRequest = pullRequestQuery.data?.pullRequests?.nodes?.[0];
  const changedFiles = pullRequest?.changedFiles ?? [];

  const {
    isViewed,
    toggle: toggleViewed,
    count: viewedCount,
  } = useViewedFiles(pullRequest?.rowId);

  const {
    comments,
    reviews,
    isLoading,
    isError,
    actions,
    submitReview,
    isSubmittingReview,
  } = usePullRequestConversation({
    pullRequestId: pullRequest?.rowId,
    currentUserId,
  });

  // live-update the conversation as comments change, over SSE
  usePullRequestCommentSubscription({
    pullRequestId: pullRequest?.rowId,
    accessToken: session?.accessToken,
  });

  // group comments: path-anchored comments feed each file's diff, the rest
  // (no path) are the general conversation
  const commentsByPath = new Map<string, PullRequestComment[]>();
  const generalComments: PullRequestComment[] = [];
  for (const comment of comments) {
    if (comment.path) {
      const existing = commentsByPath.get(comment.path) ?? [];
      existing.push(comment);
      commentsByPath.set(comment.path, existing);
    } else {
      generalComments.push(comment);
    }
  }

  const isExpanded = (path: string) =>
    expandedOverrides[path] ?? !isViewed(path);

  const toggleExpanded = (path: string) =>
    setExpandedOverrides((prev) => ({ ...prev, [path]: !isExpanded(path) }));

  const selectFile = (path: string) => {
    setExpandedOverrides((prev) => ({ ...prev, [path]: true }));
    // defer scroll so the card is expanded before we measure its position
    requestAnimationFrame(() => {
      document.getElementById(anchorIdFor(path))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleToggleViewed = (path: string) => {
    const willView = !isViewed(path);
    toggleViewed(path);
    // collapse when marked viewed, expand when unmarked
    setExpandedOverrides((prev) => ({ ...prev, [path]: !willView }));
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bold text-2xl">
          <Link
            to="/repositories"
            search={{ owner }}
            className="text-blue-600 hover:underline dark:text-blue-400"
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
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
        >
          <GitPullRequest className="h-4 w-4" />
          Pull Requests
        </Link>
      </div>

      {pullRequestQuery.isLoading ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          Loading pull request...
        </div>
      ) : !pullRequest ? (
        <div className="rounded-lg border p-8 text-center">
          <GitPullRequest className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 font-semibold text-xl">Pull request not found</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            This pull request does not exist or you do not have access to it.
          </p>
          <Link
            to="/repositories/$owner/$repo/pulls"
            params={{ owner, repo }}
            className="mt-4 inline-block text-blue-600 text-sm hover:underline dark:text-blue-400"
          >
            Back to pull requests
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <PullRequestDetail
            id={pullRequest.rowId}
            number={pullRequest.number}
            title={pullRequest.title}
            description={pullRequest.description ?? undefined}
            state={normalizeState(pullRequest.state)}
            authorName={pullRequest.author?.username ?? "Unknown"}
            sourceBranch={pullRequest.sourceBranch}
            targetBranch={pullRequest.targetBranch}
            createdAt={String(pullRequest.createdAt)}
            mergedAt={
              pullRequest.mergedAt ? String(pullRequest.mergedAt) : undefined
            }
            mergedByName={pullRequest.mergedBy?.username}
          />

          <ReviewSummaryBar
            reviews={reviews}
            onSubmit={submitReview}
            isSubmitting={isSubmittingReview}
            canReview={Boolean(currentUserId)}
          />

          {/* Files changed */}
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h2 className="font-semibold text-lg">Files changed</h2>
                <span className="text-muted-foreground text-sm">
                  {viewedCount} / {changedFiles.length} viewed
                </span>
              </div>
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
                No file changes in this pull request.
              </div>
            ) : (
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                {/* File tree */}
                <aside className="lg:sticky lg:top-4 lg:w-72 lg:shrink-0">
                  <div className="rounded-lg border p-2">
                    <ChangedFileTree
                      files={changedFiles}
                      isViewed={isViewed}
                      onSelectFile={selectFile}
                    />
                  </div>
                </aside>

                {/* Diffs */}
                <div className="min-w-0 flex-1 space-y-4">
                  {changedFiles.map((file) => (
                    <FileDiffCard
                      key={file.path}
                      file={file}
                      owner={owner}
                      repo={repo}
                      number={number}
                      anchorId={anchorIdFor(file.path)}
                      expanded={isExpanded(file.path)}
                      onToggleExpanded={() => toggleExpanded(file.path)}
                      viewed={isViewed(file.path)}
                      onToggleViewed={() => handleToggleViewed(file.path)}
                      mode={mode}
                      comments={commentsByPath.get(file.path)}
                      actions={actions}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <PullRequestConversation
            comments={generalComments}
            actions={actions}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      )}
    </div>
  );
}
