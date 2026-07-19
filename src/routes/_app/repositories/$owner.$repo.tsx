import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  createFileRoute,
  useNavigate,
} from "@tanstack/react-router";
import {
  Copy,
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Layers,
  ListChecks,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import {
  BranchSelector,
  BreadcrumbNav,
  FileBrowser,
  FileViewer,
  LatestCommitBar,
  ReadmeDisplay,
} from "@/components/repository";
import { Button } from "@/components/ui/button";
import {
  useDeleteRepositoryMutation,
  useRepositoriesQuery,
} from "@/generated/graphql";
import { API_BASE_URL, BASE_URL, GIT_BASE_URL } from "@/lib/config/env.config";
import repositoryBySlugOptions from "@/lib/options/repositoryBySlug.options";
import repositoryWithBranchesOptions from "@/lib/options/repositoryWithBranches.options";
import createMetaTags from "@/lib/util/createMetaTags";
import { getRepositoryAccess } from "@/lib/util/repositoryAccess";

const searchSchema = z.object({
  ref: z.string().optional(),
  path: z.string().optional(),
});

export const Route = createFileRoute("/_app/repositories/$owner/$repo")({
  validateSearch: searchSchema,
  head: ({ params }) => ({
    meta: [
      ...createMetaTags({
        title: `${params.owner}/${params.repo}`,
        description: `Repository on Arbor`,
        image: `${BASE_URL}/api/og/repo/${params.owner}/${params.repo}`,
        url: `${BASE_URL}/repositories/${params.owner}/${params.repo}`,
      }),
    ],
  }),
  component: RepositoryDetailPage,
});

interface TreeEntry {
  path: string;
  mode: string;
  type: "blob" | "tree" | "commit";
  oid: string;
}

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

interface TreeEntryCommit {
  path: string;
  commitOid: string;
  messageHeadline: string;
  committedDate: string;
  authorName: string;
}

interface BlobResponse {
  content: string;
  encoding: string;
  size: number;
}

async function fetchBranches(owner: string, repo: string): Promise<Branch[]> {
  // Use REST API for fetching branches (works without GraphQL auth)
  const res = await fetch(`${API_BASE_URL}/git/${owner}/${repo}/branches`, {
    credentials: "include",
  });

  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error("Failed to fetch branches");
  }

  return res.json();
}

async function fetchTree(
  owner: string,
  repo: string,
  ref: string,
  path?: string,
): Promise<TreeEntry[]> {
  const url = path
    ? `${API_BASE_URL}/git/${owner}/${repo}/tree/${ref}/${path}`
    : `${API_BASE_URL}/git/${owner}/${repo}/tree/${ref}`;
  const res = await fetch(url, { credentials: "include" });
  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error("Failed to fetch tree");
  }
  return res.json();
}

async function fetchTreeCommits(
  owner: string,
  repo: string,
  ref: string,
  path?: string,
): Promise<TreeEntryCommit[]> {
  const url = path
    ? `${API_BASE_URL}/git/${owner}/${repo}/tree-commits/${ref}/${path}`
    : `${API_BASE_URL}/git/${owner}/${repo}/tree-commits/${ref}`;
  const res = await fetch(url, { credentials: "include" });
  if (!res.ok) {
    if (res.status === 404) return [];
    throw new Error("Failed to fetch tree commits");
  }
  return res.json();
}

async function fetchBlob(
  owner: string,
  repo: string,
  ref: string,
  path: string,
): Promise<BlobResponse> {
  const res = await fetch(
    `${API_BASE_URL}/git/${owner}/${repo}/blob/${ref}/${path}`,
    { credentials: "include" },
  );
  if (!res.ok) throw new Error("Failed to fetch file");
  return res.json();
}

function RepositoryDetailPage() {
  const { owner, repo } = Route.useParams();
  const { ref, path } = Route.useSearch();
  const { session } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Check if we're on a child route by checking the current pathname
  const currentPath = window.location.pathname;
  const basePath = `/repositories/${owner}/${repo}`;
  const isChildRoute =
    currentPath !== basePath && currentPath.startsWith(`${basePath}/`);

  const [_showDeleteDialog, _setShowDeleteDialog] = useState(false);

  const _deleteMutation = useMutation({
    mutationKey: useDeleteRepositoryMutation.getKey(),
    mutationFn: (rowId: string) =>
      useDeleteRepositoryMutation.fetcher({
        input: { rowId },
      })(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: useRepositoriesQuery.getKey({
          userId: session!.user.rowId!,
          limit: 100,
        }),
      });
      navigate({ to: "/repositories" });
    },
  });

  // Fetch the repository row to resolve management access for the settings link
  const repositoryQuery = useQuery(
    repositoryBySlugOptions({ ownerSlug: owner, repoSlug: repo }),
  );
  const repository = repositoryQuery.data?.repositories?.nodes?.[0];
  const { canManage } = getRepositoryAccess(repository, session?.user?.rowId);

  // Default branch HEAD commit for the latest-commit bar above the file browser
  const repositoryWithBranchesQuery = useQuery(
    repositoryWithBranchesOptions({ ownerSlug: owner, repoSlug: repo }),
  );
  const defaultBranchTarget =
    repositoryWithBranchesQuery.data?.repositories?.nodes?.[0]?.defaultBranchRef
      ?.target;
  const headCommit =
    defaultBranchTarget && "oid" in defaultBranchTarget
      ? defaultBranchTarget
      : null;

  // Fetch branches
  const branchesQuery = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });

  const branches = branchesQuery.data ?? [];
  const defaultBranch =
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master";
  const currentBranch = ref ?? defaultBranch;

  // Fetch tree at current path
  const treeQuery = useQuery({
    queryKey: ["tree", owner, repo, currentBranch, path],
    queryFn: () => fetchTree(owner, repo, currentBranch, path),
    enabled: branches.length > 0 || !branchesQuery.isLoading,
  });

  // Last commit per tree entry, for the GitHub-style file browser column
  const treeCommitsQuery = useQuery({
    queryKey: ["tree-commits", owner, repo, currentBranch, path],
    queryFn: () => fetchTreeCommits(owner, repo, currentBranch, path),
    enabled: branches.length > 0 || !branchesQuery.isLoading,
  });

  // Index the last-commit info by entry basename for O(1) lookup in the browser
  const treeCommitsByPath = new Map(
    (treeCommitsQuery.data ?? []).map((entry) => [entry.path, entry]),
  );

  // Check if current path is a file (we need to fetch blob)
  const currentEntry = treeQuery.data?.find(
    (e) => e.path === path?.split("/").pop(),
  );
  const _isFile = path && currentEntry?.type === "blob";

  // For file viewing, we fetch the blob whenever a path is specified
  // This runs in parallel with tree fetch - if path is a file, tree will be empty but blob will succeed
  const blobQuery = useQuery({
    queryKey: ["blob", owner, repo, currentBranch, path],
    queryFn: () => fetchBlob(owner, repo, currentBranch, path!),
    enabled: !!path,
  });

  // Determine if we're viewing a file or directory
  // If treeQuery returns empty and blobQuery succeeds, it's a file
  // Note: content can be empty string for empty files, so check for undefined
  const viewingFile =
    path &&
    treeQuery.data?.length === 0 &&
    blobQuery.data?.content !== undefined;

  // Look for README in root
  const readmeEntry = !path
    ? treeQuery.data?.find(
        (e) => e.type === "blob" && e.path.toLowerCase().startsWith("readme"),
      )
    : null;

  const readmeQuery = useQuery({
    queryKey: ["readme", owner, repo, currentBranch, readmeEntry?.path],
    queryFn: () => fetchBlob(owner, repo, currentBranch, readmeEntry!.path),
    enabled: !!readmeEntry,
  });

  const handleBranchChange = (branch: string) => {
    navigate({
      to: "/repositories/$owner/$repo",
      params: { owner, repo },
      search: { ref: branch, path },
    });
  };

  const cloneUrl = `${GIT_BASE_URL}/${owner}/${repo}.git`;

  const copyCloneUrl = async () => {
    try {
      await navigator.clipboard.writeText(cloneUrl);
      toast.success("Clone URL copied to clipboard");
    } catch {
      toast.error("Couldn't copy the clone URL");
    }
  };

  // Only show empty state if branches loaded and are empty, and we're not viewing a file
  const isEmptyRepo =
    !branchesQuery.isLoading && branches.length === 0 && !viewingFile;

  // If we're on a child route, just render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="min-w-0 break-words font-bold text-2xl">
            <Link
              to="/repositories"
              search={{ owner }}
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              {owner}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span>{repo}</span>
          </h1>
          {/* Settings entry is gated to repository owners/admins */}
          {canManage && (
            <Button asChild variant="outline" size="sm">
              <Link
                to="/repositories/$owner/$repo/settings"
                params={{ owner, repo }}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Navigation tabs: scroll the bar itself on small screens instead of the page */}
      <div className="mb-6 flex gap-6 overflow-x-auto border-b [&>*]:shrink-0">
        <span className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm">
          <GitBranch className="h-4 w-4" />
          Code
        </span>
        <Link
          to="/repositories/$owner/$repo/commits"
          params={{ owner, repo }}
          search={{ ref: currentBranch }}
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

      {branchesQuery.isLoading && !viewingFile ? (
        /* Loading state - but not if we're already viewing a file */
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">Loading repository...</div>
        </div>
      ) : isEmptyRepo ? (
        /* Empty repository state */
        <div className="rounded-lg border bg-card p-8 text-center">
          <GitBranch className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-4 font-semibold text-xl">
            This repository is empty
          </h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Get started by creating a new file or pushing an existing
            repository.
          </p>

          <div className="mx-auto mt-6 max-w-lg rounded-lg border bg-muted/30 p-4 text-left">
            <p className="mb-2 font-medium text-sm">Quick setup</p>
            <div className="flex items-center gap-2">
              <code className="min-w-0 flex-1 break-all rounded bg-muted px-3 py-2 font-mono text-sm">
                {cloneUrl}
              </code>
              <Button variant="outline" size="sm" onClick={copyCloneUrl}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 space-y-2 text-muted-foreground text-sm">
              <p className="font-medium text-foreground">
                Push an existing repository:
              </p>
              <pre className="whitespace-pre-wrap break-all rounded bg-muted p-3 font-mono text-xs">
                {`git remote add origin ${cloneUrl}
git branch -M master
git push -u origin master`}
              </pre>
              <p className="break-words text-muted-foreground text-xs">
                When git prompts, sign in with your Arbor username and a{" "}
                <Link
                  to="/settings/tokens"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  personal access token
                </Link>{" "}
                as the password.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Repository with content */
        <div className="space-y-4">
          {/* Branch selector and clone button */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <BranchSelector
                branches={branches}
                currentBranch={currentBranch}
                onSelect={handleBranchChange}
              />
              {path && (
                <BreadcrumbNav
                  owner={owner}
                  repo={repo}
                  path={path}
                  branch={currentBranch}
                />
              )}
            </div>
            <div className="flex w-full min-w-0 flex-col items-stretch gap-1 sm:w-auto">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex min-w-0 flex-1 items-center rounded-md border sm:flex-none">
                  <code className="min-w-0 truncate px-3 py-1.5 font-mono text-sm">
                    {cloneUrl}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyCloneUrl}
                    className="rounded-l-none border-l"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="break-words text-muted-foreground text-xs sm:max-w-xs">
                Clone or push with your Arbor username and a{" "}
                <Link
                  to="/settings/tokens"
                  className="text-primary-600 hover:underline dark:text-primary-400"
                >
                  personal access token
                </Link>{" "}
                as the password.
              </p>
            </div>
          </div>

          {/* File browser or viewer */}
          {viewingFile ? (
            <FileViewer
              content={blobQuery.data!.content}
              filename={path.split("/").pop() ?? ""}
              owner={owner}
              repo={repo}
              branch={currentBranch}
              path={path}
            />
          ) : (
            <div className="space-y-3">
              {/* Latest commit on the default branch, root code view only */}
              {!path && headCommit && (
                <LatestCommitBar
                  owner={owner}
                  repo={repo}
                  oid={headCommit.oid}
                  messageHeadline={headCommit.messageHeadline}
                  authorName={headCommit.author?.name}
                  committedDate={
                    headCommit.committedDate
                      ? String(headCommit.committedDate)
                      : null
                  }
                />
              )}
              <FileBrowser
                owner={owner}
                repo={repo}
                branch={currentBranch}
                currentPath={path ?? ""}
                entries={treeQuery.data ?? []}
                isLoading={treeQuery.isLoading}
                commitsByPath={treeCommitsByPath}
                commitsLoading={treeCommitsQuery.isLoading}
              />
            </div>
          )}

          {/* README at root */}
          {!path && readmeQuery.data && readmeEntry && (
            <div className="mt-6">
              <ReadmeDisplay
                content={readmeQuery.data.content}
                filename={readmeEntry.path}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
