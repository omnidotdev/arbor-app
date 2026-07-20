import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Layers,
  ListChecks,
} from "lucide-react";

import { CreatePullRequestForm } from "@/components/pullRequest";
import { useOpenPullRequestMutation } from "@/generated/graphql";
import pullRequestsOptions from "@/lib/options/pullRequests.options";
import repositoryWithBranchesOptions from "@/lib/options/repositoryWithBranches.options";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/pulls/new",
)({
  component: NewPullRequestPage,
});

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

function NewPullRequestPage() {
  const { owner, repo } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const branchesQuery = useQuery(
    repositoryWithBranchesOptions({ ownerSlug: owner, repoSlug: repo }),
  );

  const repository = branchesQuery.data?.repositories?.nodes?.[0] ?? null;
  const repositoryId = repository?.rowId ?? null;
  const defaultBranchName =
    repository?.defaultBranchRef?.name ?? repository?.defaultBranch ?? "master";

  const branches: Branch[] = (repository?.refs?.nodes ?? []).map((ref) => ({
    name: ref.name,
    sha: ref.target && "oid" in ref.target ? ref.target.oid : "",
    isDefault: ref.name === defaultBranchName,
  }));
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";

  const createMutation = useMutation({
    mutationKey: useOpenPullRequestMutation.getKey(),
    mutationFn: async (data: {
      title: string;
      description: string;
      sourceBranch: string;
      targetBranch: string;
    }) => {
      if (!repositoryId) throw new Error("Repository not found");

      const result = await useOpenPullRequestMutation.fetcher({
        input: {
          repositoryId,
          title: data.title,
          description: data.description || null,
          sourceBranch: data.sourceBranch,
          targetBranch: data.targetBranch,
        },
      })();

      const payload = result.openPullRequest;
      // The mutation reports domain failures (branch missing, no access) in the
      // payload rather than throwing, so surface them as an error here
      if (!payload || payload.error) {
        throw new Error(payload?.error ?? "Failed to open pull request");
      }
      return payload;
    },
    onSuccess: (payload) => {
      queryClient.invalidateQueries({
        queryKey: pullRequestsOptions({ ownerSlug: owner, repoSlug: repo })
          .queryKey,
      });
      if (payload.number != null) {
        navigate({
          to: "/repositories/$owner/$repo/pulls/$number",
          params: { owner, repo, number: String(payload.number) },
        });
      } else {
        navigate({
          to: "/repositories/$owner/$repo/pulls",
          params: { owner, repo },
        });
      }
    },
  });

  const handleSubmit = (data: {
    title: string;
    description: string;
    sourceBranch: string;
    targetBranch: string;
  }) => {
    createMutation.mutate(data);
  };

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
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
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
          className="flex items-center gap-2 border-transparent border-b-2 px-1 pb-3 text-muted-foreground text-sm hover:text-foreground"
        >
          <ListChecks className="h-4 w-4" />
          Merge queue
        </Link>
      </div>

      {/* Page title */}
      <div className="mb-6">
        <h2 className="font-semibold text-xl">Open a pull request</h2>
        <p className="mt-1 text-muted-foreground">
          Compare changes between branches and create a pull request for review.
        </p>
      </div>

      {/* Form */}
      {branchesQuery.isLoading ? (
        <div className="space-y-4">
          <div className="h-20 animate-pulse rounded-lg bg-muted" />
          <div className="h-12 animate-pulse rounded bg-muted" />
          <div className="h-32 animate-pulse rounded bg-muted" />
        </div>
      ) : branches.length < 2 ? (
        <div className="rounded-lg border p-8 text-center">
          <GitBranch className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Need at least two branches</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Create another branch to compare changes and open a pull request.
          </p>
          <Link
            to="/repositories/$owner/$repo/branches"
            params={{ owner, repo }}
            className="mt-4 inline-block text-primary-600 text-sm hover:underline dark:text-primary-400"
          >
            Manage branches
          </Link>
        </div>
      ) : (
        <CreatePullRequestForm
          branches={branches}
          defaultBranch={defaultBranch}
          onSubmit={handleSubmit}
          isSubmitting={createMutation.isPending}
        />
      )}

      {createMutation.isError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
          {createMutation.error instanceof Error
            ? createMutation.error.message
            : "Failed to create pull request"}
        </div>
      )}
    </div>
  );
}
