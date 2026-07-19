import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  Clock,
  GitBranch,
  GitCommit,
  GitFork,
  GitMerge,
  GitPullRequest,
  Layers,
  ListChecks,
  User,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useMergeChangeMutation } from "@/generated/graphql";
import stackOptions from "@/lib/options/stack.options";

import type { StackQuery } from "@/generated/graphql";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/stacks/$stackId",
)({
  component: StackDetailPage,
});

type StackNode = NonNullable<StackQuery["stack"]>;
type ChangeNode = StackNode["changes"]["nodes"][number];
type CheckNode = ChangeNode["verificationChecks"]["nodes"][number];

type CheckState = "passed" | "failed" | "pending" | "unknown";

// Normalize the free-form check status string into the three visual buckets the
// gate cares about (plus an "unknown" fallback for anything unexpected)
function checkState(status: string): CheckState {
  const value = status.toLowerCase();
  if (["passed", "success", "succeeded", "successful"].includes(value)) {
    return "passed";
  }
  if (["failed", "failure", "error", "errored"].includes(value)) {
    return "failed";
  }
  if (
    ["pending", "running", "queued", "in_progress", "waiting"].includes(value)
  ) {
    return "pending";
  }
  return "unknown";
}

const checkStateStyles: Record<CheckState, string> = {
  passed: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  failed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  unknown: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

const checkStateIcons: Record<CheckState, typeof CheckCircle2> = {
  passed: CheckCircle2,
  failed: XCircle,
  pending: Clock,
  unknown: AlertCircle,
};

const changeStatusStyles: Record<string, string> = {
  open: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  draft: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  merged:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  closed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

function changeStatusStyle(status: string): string {
  return (
    changeStatusStyles[status] ??
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  );
}

// A change is mergeable when every *required* verification check has passed.
// Return both the verdict and the names of the required checks still blocking
// it so the UI can name them.
function evaluateMergeability(checks: readonly CheckNode[]): {
  ready: boolean;
  blockedBy: string[];
} {
  const blockedBy = checks
    .filter((check) => check.required && checkState(check.status) !== "passed")
    .map((check) => check.name);
  return { ready: blockedBy.length === 0, blockedBy };
}

function StackDetailPage() {
  const { owner, repo, stackId } = Route.useParams();

  const stackQuery = useQuery(stackOptions({ rowId: stackId }));
  const stack = stackQuery.data?.stack;

  // Changes come back ordered by position ascending (base first). Render them
  // bottom-up: the base change sits at the bottom of the vertical stack, so we
  // reverse for display while keeping the raw order for merge-target logic.
  const changesAscending = stack?.changes.nodes ?? [];
  const changesTopDown = [...changesAscending].reverse();

  // The next change to land is the bottom-most (lowest position) that has not
  // already merged; the Merge button attaches there
  const mergeTarget = changesAscending.find(
    (change) => change.status !== "merged",
  );
  const mergeTargetChecks = mergeTarget?.verificationChecks.nodes ?? [];
  const mergeTargetReady = mergeTarget
    ? evaluateMergeability(mergeTargetChecks).ready
    : false;

  const queryClient = useQueryClient();
  const mergeMutation = useMutation({
    mutationKey: useMergeChangeMutation.getKey(),
    mutationFn: (changeId: string) =>
      useMergeChangeMutation.fetcher({ changeId })(),
    onSuccess: (data) => {
      const result = data.mergeChange;
      if (result?.success) {
        toast.success(
          result.deferred ? "Merge recorded, queued to land" : "Change merged",
        );
        queryClient.invalidateQueries({
          queryKey: stackOptions({ rowId: stackId }).queryKey,
        });
      } else {
        toast.error(result?.error ?? "Couldn't merge the change");
      }
    },
    onError: () => toast.error("Couldn't merge the change"),
  });

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
          search={{ ref: stack?.baseBranch ?? "master" }}
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
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
        >
          <Layers className="h-4 w-4" />
          Stacks
        </Link>
        <Link
          to="/repositories/$owner/$repo/merge-queue"
          params={{ owner, repo }}
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <ListChecks className="h-4 w-4" />
          Merge queue
        </Link>
      </div>

      <div className="mb-4">
        <Link
          to="/repositories/$owner/$repo/stacks"
          params={{ owner, repo }}
          className="text-muted-foreground text-sm hover:underline"
        >
          &larr; Back to stacks
        </Link>
      </div>

      {stackQuery.isError ? (
        <div className="rounded-lg border p-8 text-center">
          <Layers className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Unable to load stack</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      ) : stackQuery.isLoading ? (
        <div className="space-y-3">
          <div className="h-24 animate-pulse rounded-lg bg-muted" />
          <div className="h-24 animate-pulse rounded-lg bg-muted" />
        </div>
      ) : !stack ? (
        <div className="rounded-lg border p-8 text-center">
          <Layers className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Stack not found</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            This stack may have been removed.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stack summary */}
          <div className="rounded-lg border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="break-words font-semibold text-xl">
                {stack.title}
              </h2>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${changeStatusStyle(stack.status)}`}
              >
                {stack.status}
              </span>
            </div>
            {stack.description && (
              <p className="mt-2 break-words text-muted-foreground text-sm">
                {stack.description}
              </p>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {stack.author?.username ?? "Unknown"}
              </span>
              {stack.authoredByAgent && (
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
                  <Bot className="h-3 w-3" />
                  via {stack.authoredByAgent.name}
                </span>
              )}
              <span>
                base{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  {stack.baseBranch}
                </code>
              </span>
            </div>
          </div>

          {/* Ordered changes, rendered bottom-up */}
          {changesTopDown.length === 0 ? (
            <div className="rounded-lg border p-8 text-center">
              <GitCommit className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 font-medium">No changes in this stack</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                Push changes to this stack to see them here.
              </p>
            </div>
          ) : (
            <ol className="space-y-3">
              {changesTopDown.map((change) => {
                const checks = change.verificationChecks.nodes;
                const { ready, blockedBy } = evaluateMergeability(checks);
                const isMerged = change.status === "merged";
                const isMergeTarget = mergeTarget?.rowId === change.rowId;

                return (
                  <li
                    key={change.rowId}
                    className="rounded-lg border bg-card p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted font-mono text-xs">
                        {change.position}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="break-words font-medium">
                            {change.title}
                          </span>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${changeStatusStyle(change.status)}`}
                          >
                            {change.status}
                          </span>
                          {change.commitSha && (
                            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                              {change.commitSha.slice(0, 7)}
                            </code>
                          )}
                          {change.pullRequest && (
                            <Link
                              to="/repositories/$owner/$repo/pulls/$number"
                              params={{
                                owner,
                                repo,
                                number: String(change.pullRequest.number),
                              }}
                              className="text-primary-600 text-xs hover:underline dark:text-primary-400"
                            >
                              #{change.pullRequest.number}
                            </Link>
                          )}
                        </div>
                        {change.description && (
                          <p className="mt-1 break-words text-muted-foreground text-sm">
                            {change.description}
                          </p>
                        )}

                        {/* Verification checks */}
                        {checks.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {checks.map((check) => {
                              const state = checkState(check.status);
                              const Icon = checkStateIcons[state];
                              const chipClass = `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${checkStateStyles[state]}`;
                              const chipContent = (
                                <>
                                  <Icon className="h-3 w-3" />
                                  {check.name}
                                  {check.required && (
                                    <span className="ml-0.5 rounded bg-black/10 px-1 text-[10px] uppercase tracking-wide dark:bg-white/10">
                                      required
                                    </span>
                                  )}
                                </>
                              );
                              return check.detailsUrl ? (
                                <a
                                  key={check.rowId}
                                  href={check.detailsUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  title={check.summary ?? undefined}
                                  className={chipClass}
                                >
                                  {chipContent}
                                </a>
                              ) : (
                                <span
                                  key={check.rowId}
                                  title={check.summary ?? undefined}
                                  className={chipClass}
                                >
                                  {chipContent}
                                </span>
                              );
                            })}
                          </div>
                        )}

                        {/* Mergeability indicator */}
                        {!isMerged && (
                          <div className="mt-3 text-sm">
                            {ready ? (
                              <span className="inline-flex items-center gap-1 font-medium text-green-700 dark:text-green-400">
                                <CheckCircle2 className="h-4 w-4" />
                                Ready to merge
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 font-medium text-amber-700 dark:text-amber-400">
                                <AlertCircle className="h-4 w-4" />
                                Blocked by: {blockedBy.join(", ")}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Merge action on the bottom-most unmerged change */}
                        {isMergeTarget && !isMerged && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <Button
                              size="sm"
                              disabled={
                                !mergeTargetReady || mergeMutation.isPending
                              }
                              onClick={() => mergeMutation.mutate(change.rowId)}
                              title={
                                mergeTargetReady
                                  ? "Merge this change"
                                  : "Resolve the required checks to merge"
                              }
                            >
                              <GitMerge className="mr-2 h-4 w-4" />
                              {mergeMutation.isPending ? "Merging..." : "Merge"}
                            </Button>
                            <span className="text-muted-foreground text-xs">
                              {mergeTargetReady
                                ? "All required checks passed"
                                : "Resolve the required checks above to merge"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}
