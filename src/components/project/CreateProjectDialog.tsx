import { Boxes, Globe, Lock, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Organization {
  rowId: string;
  name: string;
  slug: string;
}

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: {
    name: string;
    description: string;
    visibility: "public" | "private";
    organizationId?: string;
  }) => void;
  organizations?: Organization[];
  isCreating?: boolean;
}

/**
 * Dialog for creating a new project. Mirrors CreateRepositoryDialog so the two
 * creation flows feel consistent.
 */
export function CreateProjectDialog({
  isOpen,
  onClose,
  onCreate,
  organizations = [],
  isCreating,
}: CreateProjectDialogProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [owner, setOwner] = useState<string>("personal");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate({
        name: name.trim(),
        description: description.trim(),
        visibility,
        organizationId: owner === "personal" ? undefined : owner,
      });
    }
  };

  const handleClose = () => {
    setName("");
    setDescription("");
    setVisibility("public");
    setOwner("personal");
    onClose();
  };

  // Generate slug from name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-semibold text-lg">
            <Boxes className="h-5 w-5" />
            Create a new project
          </h2>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Owner selector */}
            {organizations.length > 0 && (
              <div>
                <label
                  htmlFor="project-owner"
                  className="mb-1.5 block font-medium text-sm"
                >
                  Owner
                </label>
                <select
                  id="project-owner"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="personal">Personal account</option>
                  {organizations.map((org) => (
                    <option key={org.rowId} value={org.rowId}>
                      {org.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Project name */}
            <div>
              <label
                htmlFor="project-name"
                className="mb-1.5 block font-medium text-sm"
              >
                Project name
              </label>
              <Input
                id="project-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="my-platform"
              />
              {slug && slug !== name && (
                <p className="mt-1 text-muted-foreground text-xs">
                  Will be created as: {slug}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="project-description"
                className="mb-1.5 block font-medium text-sm"
              >
                Description{" "}
                <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                id="project-description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A short description of your project"
              />
            </div>

            {/* Visibility */}
            <fieldset>
              <legend className="mb-2 block font-medium text-sm">
                Visibility
              </legend>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-start gap-3 rounded-md border p-3 hover:bg-accent">
                  <input
                    type="radio"
                    name="project-visibility"
                    value="public"
                    checked={visibility === "public"}
                    onChange={() => setVisibility("public")}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-medium">
                      <Globe className="h-4 w-4" />
                      Public
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Anyone can see this project.
                    </p>
                  </div>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-md border p-3 hover:bg-accent">
                  <input
                    type="radio"
                    name="project-visibility"
                    value="private"
                    checked={visibility === "private"}
                    onChange={() => setVisibility("private")}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-medium">
                      <Lock className="h-4 w-4" />
                      Private
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Only you and collaborators can see this project.
                    </p>
                  </div>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!name.trim() || isCreating}>
              {isCreating ? "Creating..." : "Create project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
