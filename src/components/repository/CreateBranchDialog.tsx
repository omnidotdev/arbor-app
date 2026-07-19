import { GitBranch, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CreateBranchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, sourceBranch: string) => void;
  branches: { name: string; sha: string; isDefault: boolean }[];
  isCreating?: boolean;
}

/**
 * Dialog for creating a new branch.
 */
export function CreateBranchDialog({
  isOpen,
  onClose,
  onCreate,
  branches,
  isCreating,
}: CreateBranchDialogProps) {
  const [name, setName] = useState("");
  const [sourceBranch, setSourceBranch] = useState(
    branches.find((b) => b.isDefault)?.name ?? branches[0]?.name ?? "master",
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim(), sourceBranch);
    }
  };

  const handleClose = () => {
    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md rounded-lg border bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <GitBranch className="h-5 w-5" />
            Create new branch
          </h2>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="branch-name"
                className="mb-1.5 block font-medium text-sm"
              >
                Branch name
              </label>
              <input
                id="branch-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="feature/my-feature"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="source-branch"
                className="mb-1.5 block font-medium text-sm"
              >
                Source branch
              </label>
              <select
                id="source-branch"
                value={sourceBranch}
                onChange={(e) => setSourceBranch(e.target.value)}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {branches.map((branch) => (
                  <option key={branch.name} value={branch.name}>
                    {branch.name}
                    {branch.isDefault ? " (default)" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim() || isCreating}>
              {isCreating ? "Creating..." : "Create branch"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
