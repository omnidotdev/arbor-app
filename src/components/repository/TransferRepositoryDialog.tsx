import { ArrowRightLeft, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

/** A workspace the repository can move into */
export interface TransferTarget {
  /** Identity-provider organization id */
  id: string;
  name: string;
  slug: string;
}

interface TransferRepositoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onTransfer: (target: TransferTarget) => void;
  repositoryName: string;
  /** The workspace it is in now, as people read it */
  currentWorkspace: string;
  /** Workspaces the user is an owner or admin of, other than the current one */
  targets: TransferTarget[];
  isTransferring?: boolean;
  error?: string | null;
}

/**
 * Confirm moving a repository to another workspace. Names the target and what
 * changes before anything moves
 */
export function TransferRepositoryDialog({
  isOpen,
  onClose,
  onTransfer,
  repositoryName,
  currentWorkspace,
  targets,
  isTransferring,
  error,
}: TransferRepositoryDialogProps) {
  const [targetId, setTargetId] = useState(targets[0]?.id ?? "");

  if (!isOpen) return null;

  const target = targets.find((t) => t.id === targetId);

  const handleClose = () => {
    if (!isTransferring) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
      />

      <div
        role="dialog"
        aria-labelledby="transfer-repository-title"
        className="relative w-full max-w-md rounded-lg border bg-background p-6 shadow-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2
            id="transfer-repository-title"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <ArrowRightLeft className="h-5 w-5" />
            Move {repositoryName}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            disabled={isTransferring}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <label
          htmlFor="transfer-target"
          className="mb-1.5 block font-medium text-sm"
        >
          Move to
        </label>
        <select
          id="transfer-target"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
          disabled={isTransferring}
        >
          {targets.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} (@{t.slug})
            </option>
          ))}
        </select>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-muted-foreground text-sm">
          <li>
            It leaves {currentWorkspace} and belongs to{" "}
            <strong className="text-foreground">
              {target?.name ?? "the workspace"}
            </strong>
            , whose members get access through it from now on.
          </li>
          <li>
            You become its owner. Its history, branches and collaborators stay.
          </li>
          <li>
            Its old links and clone URL keep working and lead to the new place.
          </li>
          <li>It counts toward that workspace&rsquo;s plan from now on.</li>
        </ul>

        {error && (
          <p role="alert" className="mt-3 text-destructive text-sm">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isTransferring}
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={!target || isTransferring}
            onClick={() => target && onTransfer(target)}
          >
            {isTransferring
              ? "Moving..."
              : `Move to ${target?.name ?? "workspace"}`}
          </Button>
        </div>
      </div>
    </div>
  );
}
