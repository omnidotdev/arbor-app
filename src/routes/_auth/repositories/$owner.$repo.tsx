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
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import {
  BranchSelector,
  BreadcrumbNav,
  FileBrowser,
  FileViewer,
  ReadmeDisplay,
} from "@/components/repository";
import { Button } from "@/components/ui/button";
import {
  useDeleteRepositoryMutation,
  useRepositoriesQuery,
} from "@/generated/graphql";
import { API_BASE_URL } from "@/lib/config/env.config";

const searchSchema = z.object({
  ref: z.string().optional(),
  path: z.string().optional(),
});

export const Route = createFileRoute("/_auth/repositories/$owner/$repo")({
  validateSearch: searchSchema,
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
    currentPath !== basePath && currentPath.startsWith(basePath + "/");

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const deleteMutation = useMutation({
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

  // Check if current path is a file (we need to fetch blob)
  const currentEntry = treeQuery.data?.find(
    (e) => e.path === path?.split("/").pop(),
  );
  const isFile = path && currentEntry?.type === "blob";

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

  const cloneUrl = `${API_BASE_URL}/git/${owner}/${repo}.git`;

  const copyCloneUrl = async () => {
    await navigator.clipboard.writeText(cloneUrl);
  };

  // Only show empty state if branches loaded and are empty, and we're not viewing a file
  const isEmptyRepo =
    !branchesQuery.isLoading && branches.length === 0 && !viewingFile;

  // If we're on a child route, just render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <div className="container mx-auto max-w-6xl px-6 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">
            <Link
              to="/repositories"
              search={{ owner }}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {owner}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span>{repo}</span>
          </h1>
          {/* Settings button - route will be added later */}
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="mb-6 flex gap-6 border-b">
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
              <code className="flex-1 rounded bg-muted px-3 py-2 font-mono text-sm">
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
              <pre className="overflow-x-auto rounded bg-muted p-3 font-mono text-xs">
                {`git remote add origin ${cloneUrl}
git branch -M master
git push -u origin master`}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        /* Repository with content */
        <div className="space-y-4">
          {/* Branch selector and clone button */}
          <div className="flex items-center justify-between">
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
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border">
                <code className="px-3 py-1.5 font-mono text-sm">
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
            <FileBrowser
              owner={owner}
              repo={repo}
              branch={currentBranch}
              currentPath={path ?? ""}
              entries={treeQuery.data ?? []}
              isLoading={treeQuery.isLoading}
            />
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
