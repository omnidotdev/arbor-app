import { GitBranch, Globe, Lock, Search, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface SelectableRepository {
  rowId: string;
  name: string;
  slug: string;
  visibility: string;
  owner?: { username: string } | null;
  organization?: { idpOrganizationId: string } | null;
}

interface AddRepositoryToProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (repositoryId: string) => void;
  /** The caller's repositories that are not already members of the project. */
  repositories: SelectableRepository[];
  isAdding?: boolean;
  error?: string | null;
}

const repoOwnerSlug = (repo: SelectableRepository) =>
  repo.organization?.idpOrganizationId ?? repo.owner?.username ?? "";

/**
 * Dialog for attaching one of the caller's repositories to a project. Only
 * repositories the caller can write to are offered; the API enforces the same
 * rule, so this is a convenience filter, not the access boundary.
 */
export function AddRepositoryToProjectDialog({
  isOpen,
  onClose,
  onAdd,
  repositories,
  isAdding,
  error,
}: AddRepositoryToProjectDialogProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setSearch("");
    onClose();
  };

  const query = search.trim().toLowerCase();
  const filtered = query
    ? repositories.filter((repo) => {
        const owner = repoOwnerSlug(repo).toLowerCase();
        return (
          repo.name.toLowerCase().includes(query) ||
          `${owner}/${repo.name}`.toLowerCase().includes(query)
        );
      })
    : repositories;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
      />

      {/* Dialog */}
      <div className="relative flex max-h-[80vh] w-full max-w-lg flex-col rounded-lg border bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <GitBranch className="h-5 w-5" />
            Add a repository
          </h2>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative mb-3">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your repositories"
            className="pl-9"
          />
        </div>

        {error && (
          <p className="mb-3 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-destructive text-sm">
            {error}
          </p>
        )}

        <div className="-mx-1 flex-1 space-y-1 overflow-y-auto px-1">
          {filtered.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground text-sm">
              {repositories.length === 0
                ? "You have no repositories left to add to this project."
                : "No repositories match your search."}
            </div>
          ) : (
            filtered.map((repo) => {
              const owner = repoOwnerSlug(repo);
              return (
                <button
                  key={repo.rowId}
                  type="button"
                  disabled={isAdding}
                  onClick={() => onAdd(repo.rowId)}
                  className="flex w-full items-center gap-2 rounded-md border bg-card p-3 text-left text-sm hover:bg-accent disabled:opacity-50"
                >
                  {repo.visibility === "private" ? (
                    <Lock className="h-3 w-3 shrink-0 text-muted-foreground" />
                  ) : (
                    <Globe className="h-3 w-3 shrink-0 text-muted-foreground" />
                  )}
                  <span className="break-all font-medium">
                    {owner}/{repo.name}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
