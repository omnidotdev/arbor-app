import { useQuery } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { GitBranch, GitCommit, GitFork, GitPullRequest } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { BranchSelector, CommitList } from "@/components/repository";
import { API_BASE_URL } from "@/lib/config/env.config";

const searchSchema = z.object({
  ref: z.string().optional(),
});

export const Route = createFileRoute("/_app/repositories/$owner/$repo/commits")(
  {
    validateSearch: searchSchema,
    component: CommitsPage,
  },
);

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

interface Commit {
  sha: string;
  message: string;
  authorName: string;
  authorEmail: string;
  authorDate: string;
}

interface ApiCommit {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
    timestamp: number;
  };
}

async function fetchBranches(owner: string, repo: string): Promise<Branch[]> {
  const res = await fetch(`${API_BASE_URL}/git/${owner}/${repo}/branches`, {
    credentials: "include",
  });
  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error("Failed to fetch branches");
  }
  return res.json();
}

async function fetchCommits(
  owner: string,
  repo: string,
  ref: string,
  page = 1,
  limit = 30,
): Promise<Commit[]> {
  const res = await fetch(
    `${API_BASE_URL}/git/${owner}/${repo}/commits/${ref}?page=${page}&limit=${limit}`,
    { credentials: "include" },
  );
  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error("Failed to fetch commits");
  }
  const apiCommits: ApiCommit[] = await res.json();

  // Transform API response to expected format
  return apiCommits.map((commit) => ({
    sha: commit.sha,
    message: commit.message,
    authorName: commit.author.name,
    authorEmail: commit.author.email,
    // Convert Unix timestamp (seconds) to ISO string
    authorDate: new Date(commit.author.timestamp * 1000).toISOString(),
  }));
}

function CommitsPage() {
  const { owner, repo } = Route.useParams();
  const { ref } = Route.useSearch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  // Fetch branches
  const branchesQuery = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });

  const branches = branchesQuery.data ?? [];
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";
  const currentBranch = ref ?? defaultBranch;

  // Fetch commits
  const commitsQuery = useQuery({
    queryKey: ["commits", owner, repo, currentBranch, page],
    queryFn: () => fetchCommits(owner, repo, currentBranch, page),
    enabled: branches.length > 0 || !branchesQuery.isLoading,
  });

  const handleBranchChange = (branch: string) => {
    setPage(1);
    navigate({
      to: "/repositories/$owner/$repo/commits",
      params: { owner, repo },
      search: { ref: branch },
    });
  };

  const handleLoadMore = () => {
    setPage((p) => p + 1);
  };

  // Assume there's more if we got a full page
  const hasMore = (commitsQuery.data?.length ?? 0) >= 30;

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
          search={{ ref: currentBranch }}
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

      {/* Branch selector */}
      <div className="mb-4">
        <BranchSelector
          branches={branches}
          currentBranch={currentBranch}
          onSelect={handleBranchChange}
        />
      </div>

      {/* Commit list */}
      <CommitList
        commits={commitsQuery.data ?? []}
        owner={owner}
        repo={repo}
        isLoading={commitsQuery.isLoading}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}
