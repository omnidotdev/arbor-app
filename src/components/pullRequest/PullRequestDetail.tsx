import {
  GitBranch,
  GitMerge,
  GitPullRequest,
  MessageSquare,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PullRequestDetailProps {
  id: string;
  number: number;
  title: string;
  description?: string;
  state: "open" | "closed" | "merged" | "draft";
  authorName: string;
  sourceBranch: string;
  targetBranch: string;
  createdAt: string;
  mergedAt?: string;
  mergedByName?: string;
  onMerge?: () => void;
  onClose?: () => void;
  onReopen?: () => void;
  isMerging?: boolean;
  canMerge?: boolean;
}

const stateStyles = {
  open: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  closed: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  merged:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  draft: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

const stateIcons = {
  open: GitPullRequest,
  closed: GitPullRequest,
  merged: GitMerge,
  draft: GitPullRequest,
};

/**
 * Pull request detail header.
 */
export function PullRequestDetail({
  number,
  title,
  description,
  state,
  authorName,
  sourceBranch,
  targetBranch,
  createdAt,
  mergedAt,
  mergedByName,
  onMerge,
  onClose,
  onReopen,
  isMerging,
  canMerge = true,
}: PullRequestDetailProps) {
  const StateIcon = stateIcons[state];
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start gap-3">
          <div className={`mt-1 rounded-full p-2 ${stateStyles[state]}`}>
            <StateIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-2xl">
              {title}
              <span className="ml-2 font-normal text-muted-foreground">
                #{number}
              </span>
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
              <span
                className={`rounded-full px-2.5 py-0.5 font-medium text-xs capitalize ${stateStyles[state]}`}
              >
                {state}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <strong className="text-foreground">{authorName}</strong> wants
                to merge
              </span>
              <span className="flex items-center gap-1">
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  {sourceBranch}
                </code>
                <span>into</span>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  {targetBranch}
                </code>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2 border-b pb-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm">Description</span>
          </div>
          <div className="prose prose-sm dark:prose-invert mt-3 max-w-none">
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      )}

      {/* Merge status */}
      {state === "open" && (
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">
                  {canMerge
                    ? "This branch has no conflicts with the base branch"
                    : "This branch has conflicts that must be resolved"}
                </p>
                <p className="text-muted-foreground text-sm">
                  {canMerge
                    ? "Merging can be performed automatically"
                    : "Resolve conflicts before merging"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {onClose && (
                <Button variant="outline" onClick={onClose}>
                  Close pull request
                </Button>
              )}
              {onMerge && (
                <Button
                  onClick={onMerge}
                  disabled={!canMerge || isMerging}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <GitMerge className="mr-2 h-4 w-4" />
                  {isMerging ? "Merging..." : "Merge pull request"}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Merged status */}
      {state === "merged" && mergedAt && (
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
          <div className="flex items-center gap-3">
            <GitMerge className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <p className="text-purple-700 dark:text-purple-300">
              <strong>{mergedByName}</strong> merged this pull request on{" "}
              {new Date(mergedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      )}

      {/* Closed status */}
      {state === "closed" && onReopen && (
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              This pull request is closed.
            </p>
            <Button variant="outline" onClick={onReopen}>
              Reopen pull request
            </Button>
          </div>
        </div>
      )}

      {/* Timeline marker */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <div className="h-px flex-1 bg-border" />
        <span>Opened on {formattedDate}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
