import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import generateSlug from "@/lib/util/generateSlug";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tierName: string;
  onSubmit: (workspaceName: string, slug: string) => void;
  isLoading?: boolean;
}

/**
 * Modal for creating a new workspace from the pricing page.
 * Collects workspace name and generates slug before checkout.
 */
const CreateWorkspaceModal = ({
  isOpen,
  onClose,
  tierName,
  onSubmit,
  isLoading,
}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && nameRef.current) {
      nameRef.current.focus();
    }
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setError("");
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      setError("Organization name must be at least 2 characters");
      return;
    }

    if (trimmedName.length > 50) {
      setError("Organization name must be less than 50 characters");
      return;
    }

    const slug = generateSlug(trimmedName);
    onSubmit(trimmedName, slug);
  };

  const previewSlug = name ? generateSlug(name.trim()) : "";
  const canSubmit = name.trim().length >= 2 && name.trim().length <= 50;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer rounded opacity-70 outline-none ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <h2 className="font-semibold text-lg leading-none tracking-tight">
          Create Organization
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Create a new organization with the{" "}
          <strong className="text-primary">{tierName}</strong> plan.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Input
              ref={nameRef}
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Organization Name"
              autoComplete="off"
            />

            {previewSlug && (
              <p className="text-muted-foreground text-xs">
                URL: <span className="font-mono">{previewSlug}</span>
              </p>
            )}

            {error && <p className="text-destructive text-xs">{error}</p>}
          </div>

          <div className="mt-2 flex justify-end gap-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              disabled={isLoading}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={!canSubmit || isLoading}>
              {isLoading ? "Creating..." : "Continue to Checkout"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
