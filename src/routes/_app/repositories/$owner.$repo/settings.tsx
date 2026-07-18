import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  GitBranch,
  GitCommit,
  GitFork,
  GitPullRequest,
  Globe,
  Lock,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

import { DeleteRepositoryDialog } from "@/components/repository";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Visibility,
  useDeleteRepositoryMutation,
  useRenameRepositoryMutation,
  useUpdateRepositoryMutation,
} from "@/generated/graphql";
import { API_BASE_URL } from "@/lib/config/env.config";
import repositoryBySlugOptions from "@/lib/options/repositoryBySlug.options";
import generateSlug from "@/lib/util/generateSlug";
import { getRepositoryAccess } from "@/lib/util/repositoryAccess";

import type { RepositoryPatch } from "@/generated/graphql";

export const Route = createFileRoute(
  "/_app/repositories/$owner/$repo/settings",
)({
  component: RepositorySettingsPage,
});

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
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

function RepositorySettingsPage() {
  const { owner, repo } = Route.useParams();
  const { session } = Route.useRouteContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const repositoryQuery = useQuery(
    repositoryBySlugOptions({ ownerSlug: owner, repoSlug: repo }),
  );
  const repository = repositoryQuery.data?.repositories?.nodes?.[0];
  const { canManage, role } = getRepositoryAccess(
    repository,
    session?.user?.rowId,
  );

  const branchesQuery = useQuery({
    queryKey: ["branches", owner, repo],
    queryFn: () => fetchBranches(owner, repo),
  });
  const branches = branchesQuery.data ?? [];

  // Local form state, prefilled from the repository row once it loads
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [renameError, setRenameError] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    if (!repository) return;
    setName(repository.name);
    setSlug(repository.slug);
    setDescription(repository.description ?? "");
  }, [repository]);

  const invalidateRepository = () => {
    queryClient.invalidateQueries({
      queryKey: repositoryBySlugOptions({ ownerSlug: owner, repoSlug: repo })
        .queryKey,
    });
  };

  const renameMutation = useMutation({
    mutationKey: useRenameRepositoryMutation.getKey(),
    mutationFn: (input: { rowId: string; newSlug: string; newName: string }) =>
      useRenameRepositoryMutation.fetcher({ input })(),
    onSuccess: (result) => {
      const payload = result.renameRepository;
      if (payload?.error) {
        setRenameError(payload.error);
        return;
      }
      setRenameError(null);
      invalidateRepository();

      // The slug (and thus the URL) may have changed, so navigate to the new
      // settings location using the values the server confirmed
      const updated = payload?.repository;
      if (updated) {
        const nextOwner =
          updated.organization?.idpOrganizationId ??
          updated.owner?.username ??
          owner;
        navigate({
          to: "/repositories/$owner/$repo/settings",
          params: { owner: nextOwner, repo: updated.slug },
        });
      }
    },
    onError: () => {
      // Avoid leaking internal error detail to the UI
      setRenameError("Unable to rename repository. Please try again.");
    },
  });

  const updateMutation = useMutation({
    mutationKey: useUpdateRepositoryMutation.getKey(),
    mutationFn: (patch: RepositoryPatch) => {
      const rowId = repository?.rowId;
      if (!rowId) throw new Error("missing repository");
      return useUpdateRepositoryMutation.fetcher({ input: { rowId, patch } })();
    },
    onSuccess: invalidateRepository,
  });

  const deleteMutation = useMutation({
    mutationKey: useDeleteRepositoryMutation.getKey(),
    mutationFn: (rowId: string) =>
      useDeleteRepositoryMutation.fetcher({ input: { rowId } })(),
    onSuccess: () => {
      navigate({ to: "/repositories" });
    },
  });

  const handleRename = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repository) return;
    renameMutation.mutate({
      rowId: repository.rowId,
      newSlug: slug,
      newName: name,
    });
  };

  const handleSaveDescription = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate({ description: description || null });
  };

  const setVisibility = (visibility: "public" | "private") => {
    if (repository?.visibility === visibility) return;
    updateMutation.mutate({
      visibility:
        visibility === "public" ? Visibility.Public : Visibility.Private,
    });
  };

  const setDefaultBranch = (defaultBranch: string) => {
    if (!defaultBranch || repository?.defaultBranch === defaultBranch) return;
    // NOTE: this only updates the stored default branch. Syncing the on-disk git
    // HEAD to point at the new branch is a separate server-side follow-up
    updateMutation.mutate({ defaultBranch });
  };

  return (
    <div className="container mx-auto max-w-3xl px-6 py-6">
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
          search={{ ref: repository?.defaultBranch ?? "master" }}
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
        <span className="flex items-center gap-2 border-primary border-b-2 px-1 pb-3 font-medium text-sm">
          <Settings className="h-4 w-4" />
          Settings
        </span>
      </div>

      {repositoryQuery.isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">Loading settings...</div>
        </div>
      ) : !repository ? (
        <div className="rounded-lg border p-8 text-center">
          <h2 className="font-semibold text-xl">Repository not found</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            This repository does not exist or is no longer available.
          </p>
        </div>
      ) : !canManage ? (
        // Default to hidden: management surface is only shown to owners/admins
        <div className="rounded-lg border p-8 text-center">
          <Lock className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 font-semibold text-xl">Restricted</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Only repository owners and admins can manage these settings.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Access indicator so the limited visibility is explicit */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary text-xs capitalize">
              <ShieldCheck className="h-3.5 w-3.5" />
              {role ?? "Admin"}
            </span>
            <span className="text-muted-foreground text-sm">
              These settings are only visible to owners and admins.
            </span>
          </div>

          {/* General */}
          <section className="space-y-4 rounded-lg border p-6">
            <h2 className="font-semibold text-lg">General</h2>

            <form onSubmit={handleRename} className="space-y-4">
              <div>
                <label
                  htmlFor="repo-name"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Repository name
                </label>
                <Input
                  id="repo-name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    // keep the slug in step with the name until edited directly
                    setSlug(generateSlug(e.target.value));
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="repo-slug"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Slug
                </label>
                <Input
                  id="repo-slug"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                />
                <p className="mt-1 text-muted-foreground text-xs">
                  Used in the repository URL. Changing it moves the on-disk
                  storage.
                </p>
              </div>

              {renameError && (
                <p className="text-destructive text-sm">{renameError}</p>
              )}

              <Button
                type="submit"
                disabled={
                  renameMutation.isPending ||
                  !slug ||
                  !name ||
                  (name === repository.name && slug === repository.slug)
                }
              >
                {renameMutation.isPending ? "Saving..." : "Save name and slug"}
              </Button>
            </form>

            <form
              onSubmit={handleSaveDescription}
              className="space-y-4 border-t pt-4"
            >
              <div>
                <label
                  htmlFor="repo-description"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Description
                </label>
                <textarea
                  id="repo-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="A short description of this repository"
                />
              </div>
              <Button
                type="submit"
                variant="outline"
                disabled={
                  updateMutation.isPending ||
                  description === (repository.description ?? "")
                }
              >
                Save description
              </Button>
            </form>
          </section>

          {/* Visibility */}
          <section className="space-y-4 rounded-lg border p-6">
            <div>
              <h2 className="font-semibold text-lg">Visibility</h2>
              <p className="text-muted-foreground text-sm">
                Control who can see this repository.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={
                  repository.visibility === "public" ? "default" : "outline"
                }
                size="sm"
                disabled={updateMutation.isPending}
                onClick={() => setVisibility("public")}
              >
                <Globe className="mr-2 h-4 w-4" />
                Public
              </Button>
              <Button
                variant={
                  repository.visibility === "private" ? "default" : "outline"
                }
                size="sm"
                disabled={updateMutation.isPending}
                onClick={() => setVisibility("private")}
              >
                <Lock className="mr-2 h-4 w-4" />
                Private
              </Button>
            </div>
          </section>

          {/* Default branch */}
          <section className="space-y-4 rounded-lg border p-6">
            <div>
              <h2 className="font-semibold text-lg">Default branch</h2>
              <p className="text-muted-foreground text-sm">
                The branch shown by default and targeted by new pull requests.
              </p>
            </div>
            <select
              value={repository.defaultBranch ?? ""}
              disabled={updateMutation.isPending || branches.length === 0}
              onChange={(e) => setDefaultBranch(e.target.value)}
              className="flex h-10 w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {/* Keep the stored default selectable even if the ref list has not
                  loaded or no longer contains it */}
              {branches.every((b) => b.name !== repository.defaultBranch) &&
                repository.defaultBranch && (
                  <option value={repository.defaultBranch}>
                    {repository.defaultBranch}
                  </option>
                )}
              {branches.map((branch) => (
                <option key={branch.name} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </section>

          {/* Danger zone */}
          <section className="space-y-4 rounded-lg border border-destructive/50 p-6">
            <div>
              <h2 className="font-semibold text-destructive text-lg">
                Danger zone
              </h2>
              <p className="text-muted-foreground text-sm">
                Deleting a repository is permanent and cannot be undone.
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
            >
              Delete this repository
            </Button>
          </section>
        </div>
      )}

      {repository && (
        <DeleteRepositoryDialog
          isOpen={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
          onDelete={() => deleteMutation.mutate(repository.rowId)}
          repositoryName={repository.name}
          ownerName={owner}
          isDeleting={deleteMutation.isPending}
        />
      )}
    </div>
  );
}
