import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { GitBranch, GitCommit, GitFork, GitPullRequest } from "lucide-react";

import { CreatePullRequestForm } from "@/components/pullRequest";
import { graphqlFetch } from "@/lib/graphql/graphqlFetch";

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

interface RepositoryWithBranchesResponse {
  repositories: {
    nodes: Array<{
      rowId: string;
      defaultBranch: string;
      refs: {
        nodes: Array<{
          name: string;
          target: {
            oid: string;
          } | null;
        }>;
      };
      defaultBranchRef: {
        name: string;
      } | null;
    }>;
  };
}

const REPOSITORY_WITH_BRANCHES_QUERY = `
  query RepositoryWithBranches($ownerSlug: String!, $repoSlug: String!) {
    repositories(
      filter: {
        slug: { equalTo: $repoSlug }
        or: [
          { owner: { username: { equalTo: $ownerSlug } } }
          { organization: { slug: { equalTo: $ownerSlug } } }
        ]
      }
      first: 1
    ) {
      nodes {
        rowId
        defaultBranch
        refs(refPrefix: "refs/heads/") {
          nodes {
            name
            target {
              ... on Commit {
                oid
              }
            }
          }
        }
        defaultBranchRef {
          name
        }
      }
    }
  }
`;

async function fetchBranches(owner: string, repo: string): Promise<Branch[]> {
  const data = await graphqlFetch<
    RepositoryWithBranchesResponse,
    { ownerSlug: string; repoSlug: string }
  >(REPOSITORY_WITH_BRANCHES_QUERY, { ownerSlug: owner, repoSlug: repo })();

  const repository = data.repositories.nodes[0];
  if (!repository) return [];

  const defaultBranchName =
    repository.defaultBranchRef?.name ?? repository.defaultBranch ?? "master";

  return repository.refs.nodes.map((ref) => ({
    name: ref.name,
    sha: ref.target?.oid ?? "",
    isDefault: ref.name === defaultBranchName,
  }));
}

async function createPullRequest(
  _owner: string,
  _repo: string,
  _data: {
    title: string;
    description: string;
    sourceBranch: string;
    targetBranch: string;
  },
): Promise<{ id: string; number: number }> {
  // For now, this is a placeholder - actual GraphQL mutation would be used
  throw new Error("Pull request creation not yet implemented");
}

function NewPullRequestPage() {
  const { owner, repo } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const branchesQuery = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });

  const branches = branchesQuery.data ?? [];
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";

  const createMutation = useMutation({
    mutationFn: (data: {
      title: string;
      description: string;
      sourceBranch: string;
      targetBranch: string;
    }) => createPullRequest(owner, repo, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pullRequests", owner, repo],
      });
      navigate({
        to: "/repositories/$owner/$repo/pulls",
        params: { owner, repo },
      });
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
            className="mt-4 inline-block text-blue-600 text-sm hover:underline dark:text-blue-400"
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
