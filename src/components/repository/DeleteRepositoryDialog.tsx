import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DeleteRepositoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  repositoryName: string;
  ownerName: string;
  isDeleting?: boolean;
}

/**
 * Dialog for deleting a repository with confirmation.
 */
export function DeleteRepositoryDialog({
  isOpen,
  onClose,
  onDelete,
  repositoryName,
  ownerName,
  isDeleting,
}: DeleteRepositoryDialogProps) {
  const [confirmation, setConfirmation] = useState("");

  if (!isOpen) return null;

  const fullName = `${ownerName}/${repositoryName}`;
  const isConfirmed = confirmation === fullName;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isConfirmed) {
      onDelete();
    }
  };

  const handleClose = () => {
    setConfirmation("");
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
          <h2 className="flex items-center gap-2 font-semibold text-destructive text-lg">
            <AlertTriangle className="h-5 w-5" />
            Delete repository
          </h2>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4 rounded-md border border-destructive/50 bg-destructive/10 p-3">
          <p className="font-medium text-destructive text-sm">
            This action cannot be undone.
          </p>
          <p className="mt-1 text-muted-foreground text-sm">
            This will permanently delete the{" "}
            <strong className="text-foreground">{fullName}</strong> repository,
            including all branches, commits, and collaborator associations.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="confirmation"
              className="mb-1.5 block font-medium text-sm"
            >
              Please type{" "}
              <strong className="select-all font-mono">{fullName}</strong> to
              confirm
            </label>
            <Input
              id="confirmation"
              type="text"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              placeholder={fullName}
              autoComplete="off"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="destructive"
              disabled={!isConfirmed || isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete this repository"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
