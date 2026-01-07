import { GitBranch, GitPullRequest } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

interface CreatePullRequestFormProps {
  branches: Branch[];
  defaultBranch: string;
  onSubmit: (data: {
    title: string;
    description: string;
    sourceBranch: string;
    targetBranch: string;
  }) => void;
  isSubmitting?: boolean;
}

/**
 * Form for creating a new pull request.
 */
export function CreatePullRequestForm({
  branches,
  defaultBranch,
  onSubmit,
  isSubmitting,
}: CreatePullRequestFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sourceBranch, setSourceBranch] = useState(
    branches.find((b) => !b.isDefault)?.name ?? defaultBranch,
  );
  const [targetBranch, setTargetBranch] = useState(defaultBranch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && sourceBranch !== targetBranch) {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        sourceBranch,
        targetBranch,
      });
    }
  };

  const canSubmit = title.trim() && sourceBranch !== targetBranch;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Branch selection */}
      <div className="rounded-lg border bg-muted/30 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">base:</span>
            <select
              value={targetBranch}
              onChange={(e) => setTargetBranch(e.target.value)}
              className="rounded-md border bg-background px-2 py-1 text-sm"
            >
              {branches.map((branch) => (
                <option key={branch.name} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
          <span className="text-muted-foreground">←</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">compare:</span>
            <select
              value={sourceBranch}
              onChange={(e) => setSourceBranch(e.target.value)}
              className="rounded-md border bg-background px-2 py-1 text-sm"
            >
              {branches.map((branch) => (
                <option key={branch.name} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {sourceBranch === targetBranch && (
          <p className="mt-2 text-amber-600 text-sm dark:text-amber-400">
            Choose different branches to compare.
          </p>
        )}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="pr-title" className="mb-1.5 block font-medium text-sm">
          Title
        </label>
        <input
          id="pr-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What does this PR do?"
          className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="pr-description"
          className="mb-1.5 block font-medium text-sm"
        >
          Description
        </label>
        <textarea
          id="pr-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your changes..."
          rows={6}
          className="w-full resize-none rounded-md border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <Button type="submit" disabled={!canSubmit || isSubmitting}>
          <GitPullRequest className="mr-2 h-4 w-4" />
          {isSubmitting ? "Creating..." : "Create pull request"}
        </Button>
      </div>
    </form>
  );
}
