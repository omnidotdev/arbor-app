import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Plus,
} from "lucide-react";
import { useState } from "react";

import { BranchList, CreateBranchDialog } from "@/components/repository";
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/lib/config/env.config";
import { graphqlFetch } from "@/lib/graphql/graphqlFetch";

export const Route = createFileRoute(
  "/_auth/repositories/$owner/$repo/branches",
)({
  component: BranchesPage,
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

interface CreateRefResponse {
  createRef: {
    ref: {
      name: string;
    } | null;
    error: string | null;
  };
}

interface DeleteRefResponse {
  deleteRef: {
    success: boolean;
    error: string | null;
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

const CREATE_REF_MUTATION = `
  mutation CreateRef($input: CreateRefInput!) {
    createRef(input: $input) {
      ref {
        name
      }
      error
    }
  }
`;

const DELETE_REF_MUTATION = `
  mutation DeleteRef($input: DeleteRefInput!) {
    deleteRef(input: $input) {
      success
      error
    }
  }
`;

async function fetchBranches(
  owner: string,
  repo: string,
): Promise<{
  branches: Branch[];
  repositoryId: string | null;
}> {
  // Fetch branches from REST API
  const branchesRes = await fetch(
    `${API_BASE_URL}/git/${owner}/${repo}/branches`,
    { credentials: "include" },
  );

  if (!branchesRes.ok) {
    if (branchesRes.status === 404) return { branches: [], repositoryId: null };
    throw new Error("Failed to fetch branches");
  }

  const branches: Branch[] = await branchesRes.json();

  // Fetch repository ID from GraphQL for mutations
  let repositoryId: string | null = null;
  try {
    const data = await graphqlFetch<
      RepositoryWithBranchesResponse,
      { ownerSlug: string; repoSlug: string }
    >(REPOSITORY_WITH_BRANCHES_QUERY, { ownerSlug: owner, repoSlug: repo })();
    repositoryId = data.repositories.nodes[0]?.rowId ?? null;
  } catch {
    // GraphQL may fail if not authenticated, but branches still work
  }

  return { branches, repositoryId };
}

async function createBranch(
  repositoryId: string,
  name: string,
  sourceBranch: string,
): Promise<void> {
  const data = await graphqlFetch<
    CreateRefResponse,
    { input: { repositoryId: string; name: string; oid: string } }
  >(CREATE_REF_MUTATION, {
    input: {
      repositoryId,
      name: `refs/heads/${name}`,
      oid: sourceBranch,
    },
  })();

  if (data.createRef.error) {
    throw new Error(data.createRef.error);
  }
}

async function deleteBranch(repositoryId: string, name: string): Promise<void> {
  const data = await graphqlFetch<
    DeleteRefResponse,
    { input: { repositoryId: string; name: string } }
  >(DELETE_REF_MUTATION, {
    input: {
      repositoryId,
      name: `refs/heads/${name}`,
    },
  })();

  if (data.deleteRef.error) {
    throw new Error(data.deleteRef.error);
  }
}

function BranchesPage() {
  const { owner, repo } = Route.useParams();
  const queryClient = useQueryClient();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [deletingBranch, setDeletingBranch] = useState<string | undefined>();

  // Fetch branches (use different key from main repo page to avoid cache conflict)
  const branchesQuery = useQuery({
    queryKey: ["branches-with-repo-id", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });

  const { branches = [], repositoryId } = branchesQuery.data ?? {};
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";

  // Create branch mutation
  const createMutation = useMutation({
    mutationFn: ({
      name,
      sourceBranch,
    }: {
      name: string;
      sourceBranch: string;
    }) => {
      if (!repositoryId) throw new Error("Repository not found");
      // Find the SHA of the source branch
      const source = branches.find((b) => b.name === sourceBranch);
      if (!source) throw new Error("Source branch not found");
      return createBranch(repositoryId, name, source.sha);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["branches-with-repo-id", owner, repo],
      });
      queryClient.invalidateQueries({ queryKey: ["branches", owner, repo] });
      setShowCreateDialog(false);
    },
  });

  // Delete branch mutation
  const deleteMutation = useMutation({
    mutationFn: (name: string) => {
      if (!repositoryId) throw new Error("Repository not found");
      return deleteBranch(repositoryId, name);
    },
    onMutate: (name) => {
      setDeletingBranch(name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["branches-with-repo-id", owner, repo],
      });
      queryClient.invalidateQueries({ queryKey: ["branches", owner, repo] });
    },
    onSettled: () => {
      setDeletingBranch(undefined);
    },
  });

  const handleCreate = (name: string, sourceBranch: string) => {
    createMutation.mutate({ name, sourceBranch });
  };

  const handleDelete = (name: string) => {
    if (confirm(`Are you sure you want to delete the branch "${name}"?`)) {
      deleteMutation.mutate(name);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-6 py-6">
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
      <div className="mb-6 flex gap-6 border-b">
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
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
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

      {/* Branch management header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Branches ({branches.length})</h2>
        <Button onClick={() => setShowCreateDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New branch
        </Button>
      </div>

      {/* Branch list */}
      <BranchList
        branches={branches}
        isLoading={branchesQuery.isLoading}
        onDelete={handleDelete}
        isDeleting={deletingBranch}
      />

      {/* Create branch dialog */}
      <CreateBranchDialog
        isOpen={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        onCreate={handleCreate}
        branches={branches}
        isCreating={createMutation.isPending}
      />
    </div>
  );
}
