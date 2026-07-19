import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { PullRequestList } from "@/components/pullRequest";
import { Button } from "@/components/ui/button";
import { graphqlFetch } from "@/lib/graphql/graphqlFetch";
import pullRequestsOptions from "@/lib/options/pullRequests.options";

const searchSchema = z.object({
  state: z.enum(["open", "closed", "merged", "all"]).optional(),
});

export const Route = createFileRoute("/_app/repositories/$owner/$repo/pulls/")({
  validateSearch: searchSchema,
  component: PullRequestsPage,
});

interface PullRequest {
  id: string;
  number: number;
  title: string;
  state: "open" | "closed" | "merged" | "draft";
  authorName: string;
  sourceBranch: string;
  targetBranch: string;
  createdAt: string;
  commentCount?: number;
}

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

const KNOWN_STATES = ["open", "closed", "merged", "draft"] as const;

// Map a raw DB state string onto the union the list components render. Unknown
// values fall back to "open" so a card always has a valid style
function normalizeState(state: string): PullRequest["state"] {
  return (KNOWN_STATES as readonly string[]).includes(state)
    ? (state as PullRequest["state"])
    : "open";
}

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

function PullRequestsPage() {
  const { owner, repo } = Route.useParams();
  const { state = "open" } = Route.useSearch();
  const [currentFilter, setCurrentFilter] = useState(state);

  const branchesQuery = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });

  const pullRequestsQuery = useQuery(
    pullRequestsOptions({ ownerSlug: owner, repoSlug: repo }),
  );

  // Map the connection onto the shape the list components expect, then apply
  // the active state filter client-side ("all" shows everything)
  const allPullRequests: PullRequest[] = (
    pullRequestsQuery.data?.pullRequests?.nodes ?? []
  ).map((node) => ({
    id: node.id,
    number: node.number,
    title: node.title,
    state: normalizeState(node.state),
    authorName: node.author?.username ?? "Unknown",
    sourceBranch: node.sourceBranch,
    targetBranch: node.targetBranch,
    createdAt:
      node.createdAt instanceof Date
        ? node.createdAt.toISOString()
        : String(node.createdAt),
    commentCount: node.pullRequestComments.totalCount,
  }));

  const pullRequests =
    currentFilter === "all"
      ? allPullRequests
      : allPullRequests.filter((pr) => pr.state === currentFilter);

  const branches = branchesQuery.data ?? [];
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";

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
          className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm"
        >
          <GitPullRequest className="h-4 w-4" />
          Pull Requests
        </Link>
      </div>

      {/* Filters and actions */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 overflow-x-auto [&>*]:shrink-0">
          {(["open", "closed", "merged", "all"] as const).map((filterState) => (
            <Button
              key={filterState}
              variant={currentFilter === filterState ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentFilter(filterState)}
            >
              {filterState.charAt(0).toUpperCase() + filterState.slice(1)}
            </Button>
          ))}
        </div>
        <Button asChild>
          <Link
            to="/repositories/$owner/$repo/pulls/new"
            params={{ owner, repo }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New pull request
          </Link>
        </Button>
      </div>

      {/* Pull request list */}
      {pullRequestsQuery.isError ? (
        <div className="rounded-lg border p-8 text-center">
          <GitPullRequest className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 font-medium">Unable to load pull requests</h3>
          <p className="mt-1 text-muted-foreground text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      ) : (
        <PullRequestList
          pullRequests={pullRequests}
          owner={owner}
          repo={repo}
          isLoading={pullRequestsQuery.isLoading}
        />
      )}
    </div>
  );
}
