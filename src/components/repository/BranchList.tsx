import { GitBranch, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

interface BranchListProps {
  branches: Branch[];
  isLoading?: boolean;
  onDelete?: (name: string) => void;
  isDeleting?: string;
}

/**
 * List of branches with delete option.
 */
export function BranchList({
  branches,
  isLoading,
  onDelete,
  isDeleting,
}: BranchListProps) {
  if (isLoading) {
    return (
      <div className="rounded-lg border">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b px-4 py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            </div>
            <div className="h-6 w-16 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    );
  }

  if (branches.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <GitBranch className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-2 text-muted-foreground">No branches found</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      {branches.map((branch) => (
        <div
          key={branch.name}
          className="flex items-center justify-between gap-3 border-b px-4 py-3 last:border-b-0"
        >
          <div className="flex min-w-0 items-center gap-3">
            <GitBranch className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="truncate font-medium">{branch.name}</span>
            {branch.isDefault && (
              <span className="shrink-0 rounded bg-blue-100 px-2 py-0.5 text-blue-700 text-xs dark:bg-blue-900 dark:text-blue-300">
                default
              </span>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <code className="rounded bg-muted px-2 py-1 font-mono text-muted-foreground text-xs">
              {branch.sha.slice(0, 7)}
            </code>
            {!branch.isDefault && onDelete && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(branch.name)}
                disabled={isDeleting === branch.name}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
