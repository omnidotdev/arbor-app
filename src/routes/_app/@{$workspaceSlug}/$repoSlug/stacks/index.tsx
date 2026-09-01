import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Layers,
  ListChecks,
  Plus,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateStackMutation } from "@/generated/graphql";
import repositoryWithBranchesOptions from "@/lib/options/repositoryWithBranches.options";
import stacksOptions from "@/lib/options/stacks.options";
import { pluralize } from "@/lib/util/pluralize";

export const Route = createFileRoute("/_app/repositories/$owner/$repo/stacks/")(
  {
    component: StacksPage,
  },
);

const stackStatusStyles: Record<string, string> = {
  open: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  draft: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  merged:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  closed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

// Fall back to a neutral chip for any status the map does not cover
function statusStyle(status: string): string {
  return (
    stackStatusStyles[status] ??
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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

function StacksPage() {
  const { owner, repo } = Route.useParams();
  const { session } = Route.useRouteContext();
  const queryClient = useQueryClient();

  const [showCreate, setShowCreate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [baseBranch, setBaseBranch] = useState("");

  const stacksVariables = { ownerSlug: owner, repoSlug: repo };
  const stacksQuery = useQuery(stacksOptions(stacksVariables));

  // Resolve the repository row for its rowId (createStack input) and default
  // branch (used as the base branch fallback for a new stack)
  const repositoryQuery = useQuery(
    repositoryWithBranchesOptions({ ownerSlug: owner, repoSlug: repo }),
  );
  const repository = repositoryQuery.data?.repositories?.nodes?.[0];
  const defaultBranch = repository?.defaultBranch ?? "master";

  const createMutation = useMutation({
    mutationKey: useCreateStackMutation.getKey(),
    mutationFn: () =>
      useCreateStackMutation.fetcher({
        input: {
          stack: {
            repositoryId: repository!.rowId,
            authorId: session!.user.rowId!,
            title: title.trim(),
            description: description.trim() || null,
            baseBranch: baseBranch.trim() || defaultBranch,
          },
        },
      })(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stacksOptions(stacksVariables).queryKey,
      });
      setShowCreate(false);
      setTitle("");
      setDescription("");
      setBaseBranch("");
      toast.success("Stack created");
    },
    onError: () => {
      toast.error("Couldn't create the stack");
    },
  });

  const stacks = stacksQuery.data?.stacks?.nodes ?? [];

  const canSubmit = title.trim().length > 0 && !!repository?.rowId;

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
          search={{ ref: defaultBranch }}
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

      {/* Actions */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold text-xl">Stacks</h2>
          <p className="mt-1 text-muted-foreground text-sm">
            Group dependent changes into a stack and land them bottom-up through
            the verification gate.
          </p>
        </div>
        <Button
          onClick={() => setShowCreate((open) => !open)}
          disabled={!repository?.rowId}
        >
          <Plus className="mr-2 h-4 w-4" />
          New stack
        </Button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (canSubmit) createMutation.mutate();
          }}
          className="mb-6 space-y-4 rounded-lg border bg-card p-4"
        >
          <div className="space-y-1">
            <label htmlFor="stack-title" className="font-medium text-sm">
              Title
            </label>
            <Input
              id="stack-title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Refactor auth, then add SSO"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="stack-description" className="font-medium text-sm">
              Description
              <span className="ml-1 text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="stack-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What this stack accomplishes"
              rows={3}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="stack-base-branch" className="font-medium text-sm">
              Base branch
            </label>
            <Input
              id="stack-base-branch"
              value={baseBranch}
              onChange={(event) => setBaseBranch(event.target.value)}
              placeholder={defaultBranch}
            />
            <p className="text-muted-foreground text-xs">
              Defaults to {defaultBranch} if left blank.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="submit"
              disabled={!canSubmit || createMutation.isPending}
            >
              {createMutation.isPending ? "Creating..." : "Create stack"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowCreate(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}

      {/* Stack list */}
      {stacksQuery.isError ? (
        <div className="rounded-lg border p-8 text-center">
          <Layers className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Unable to load stacks</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      ) : stacksQuery.isLoading ? (
        <div className="space-y-3">
          <div className="h-20 animate-pulse rounded-lg bg-muted" />
          <div className="h-20 animate-pulse rounded-lg bg-muted" />
        </div>
      ) : stacks.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <Layers className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">No stacks yet</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Create a stack to group dependent changes and merge them through the
            verification gate.
          </p>
        </div>
      ) : (
        <div className="divide-y rounded-lg border">
          {stacks.map((stack) => {
            const changeCount = stack.changes.totalCount;
            const created = new Date(stack.createdAt);
            return (
              <Link
                key={stack.rowId}
                to="/repositories/$owner/$repo/stacks/$stackId"
                params={{ owner, repo, stackId: stack.rowId }}
                className="flex items-start gap-4 px-4 py-3 transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-muted/50"
              >
                <div
                  className={`mt-1 rounded-full p-1.5 ${statusStyle(stack.status)}`}
                >
                  <Layers className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="break-words font-medium">
                      {stack.title}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs capitalize ${statusStyle(stack.status)}`}
                    >
                      {stack.status}
                    </span>
                  </div>
                  {stack.description && (
                    <p className="mt-1 line-clamp-2 break-words text-muted-foreground text-sm">
                      {stack.description}
                    </p>
                  )}
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
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
                      {changeCount} {pluralize(changeCount, "change")}
                    </span>
                    <span>
                      <code className="rounded bg-muted px-1 py-0.5 text-xs">
                        {stack.baseBranch}
                      </code>
                    </span>
                    <span>created {getRelativeTime(created)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {createMutation.isError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
          Failed to create the stack. Please try again.
        </div>
      )}
    </div>
  );
}
