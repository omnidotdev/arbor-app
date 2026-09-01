import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Layers,
  ListChecks,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
import {
  useClosePullRequestMutation,
  useReopenPullRequestMutation,
} from "@/generated/graphql";
import { usePullRequestCommentSubscription } from "@/lib/hooks/usePullRequestCommentSubscription";
import { usePullRequestConversation } from "@/lib/hooks/usePullRequestConversation";
import pullRequestFilesOptions from "@/lib/options/pullRequestFiles.options";

import type { PullRequestComment } from "@/components/pullRequest/reviewTypes";

export const Route = createFileRoute(
  "/_app/@{$workspaceSlug}/$repoSlug/pulls/$number",
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
  const {
    workspaceSlug: owner,
    repoSlug: repo,
    number: numberParam,
  } = Route.useParams();
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

  const queryClient = useQueryClient();
  const pullRequestId = pullRequest?.rowId;

  // Refetch the pull request so its state (and the close/reopen controls) update
  const refetchPullRequest = () =>
    queryClient.invalidateQueries({
      queryKey: pullRequestFilesOptions({
        ownerSlug: owner,
        repoSlug: repo,
        number,
      }).queryKey,
    });

  const closeMutation = useMutation({
    mutationKey: useClosePullRequestMutation.getKey(),
    mutationFn: async () => {
      if (!pullRequestId) throw new Error("Pull request not found");
      const result = await useClosePullRequestMutation.fetcher({
        input: { pullRequestId },
      })();
      const payload = result.closePullRequest;
      // Domain failures (unauthorized, merged) are reported in the payload
      if (!payload || payload.error) {
        throw new Error(payload?.error ?? "Failed to close pull request");
      }
      return payload;
    },
    onSuccess: () => {
      toast.success("Pull request closed");
      refetchPullRequest();
    },
    onError: (error) =>
      toast.error(
        error instanceof Error ? error.message : "Failed to close pull request",
      ),
  });

  const reopenMutation = useMutation({
    mutationKey: useReopenPullRequestMutation.getKey(),
    mutationFn: async () => {
      if (!pullRequestId) throw new Error("Pull request not found");
      const result = await useReopenPullRequestMutation.fetcher({
        input: { pullRequestId },
      })();
      const payload = result.reopenPullRequest;
      if (!payload || payload.error) {
        throw new Error(payload?.error ?? "Failed to reopen pull request");
      }
      return payload;
    },
    onSuccess: () => {
      toast.success("Pull request reopened");
      refetchPullRequest();
    },
    onError: (error) =>
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to reopen pull request",
      ),
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
            className="text-primary-600 hover:underline dark:text-primary-400"
          >
            {owner}
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link
            to="/@{$workspaceSlug}/$repoSlug"
            params={{ workspaceSlug: owner, repoSlug: repo }}
            className="hover:underline"
          >
            {repo}
          </Link>
        </h1>
      </div>

      {/* Navigation tabs */}
      <div className="mb-6 flex gap-6 overflow-x-auto border-b [&>*]:shrink-0">
        <Link
          to="/@{$workspaceSlug}/$repoSlug"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitBranch className="h-4 w-4" />
          Code
        </Link>
        <Link
          to="/@{$workspaceSlug}/$repoSlug/commits"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          search={{ ref: undefined }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitCommit className="h-4 w-4" />
          Commits
        </Link>
        <Link
          to="/@{$workspaceSlug}/$repoSlug/branches"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <GitFork className="h-4 w-4" />
          Branches
        </Link>
        <Link
          to="/@{$workspaceSlug}/$repoSlug/pulls"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
        >
          <GitPullRequest className="h-4 w-4" />
          Pull Requests
        </Link>
        <Link
          to="/@{$workspaceSlug}/$repoSlug/stacks"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <Layers className="h-4 w-4" />
          Stacks
        </Link>
        <Link
          to="/@{$workspaceSlug}/$repoSlug/merge-queue"
          params={{ workspaceSlug: owner, repoSlug: repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <ListChecks className="h-4 w-4" />
          Merge queue
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
            to="/@{$workspaceSlug}/$repoSlug/pulls"
            params={{ workspaceSlug: owner, repoSlug: repo }}
            className="mt-4 inline-block text-primary-600 text-sm hover:underline dark:text-primary-400"
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
            agentName={pullRequest.authoredByAgent?.name}
            sourceBranch={pullRequest.sourceBranch}
            targetBranch={pullRequest.targetBranch}
            createdAt={String(pullRequest.createdAt)}
            mergedAt={
              pullRequest.mergedAt ? String(pullRequest.mergedAt) : undefined
            }
            mergedByName={pullRequest.mergedBy?.username}
            onClose={() => {
              // Guard rather than dropping the handler, so the button stays put
              // (no flicker) while ignoring a double-click mid-request
              if (!closeMutation.isPending) closeMutation.mutate();
            }}
            onReopen={() => {
              if (!reopenMutation.isPending) reopenMutation.mutate();
            }}
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
