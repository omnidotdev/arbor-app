import { ChevronDown, GitBranch } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Branch {
  name: string;
  sha: string;
  isDefault: boolean;
}

interface BranchSelectorProps {
  branches: Branch[];
  currentBranch: string;
  onSelect: (branch: string) => void;
}

/**
 * Branch selector dropdown.
 */
export function BranchSelector({
  branches,
  currentBranch,
  onSelect,
}: BranchSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <GitBranch className="h-4 w-4" />
        <span>{currentBranch}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute left-0 z-20 mt-1 w-64 overflow-hidden rounded-md border bg-popover shadow-lg">
            <div className="border-b px-3 py-2">
              <p className="font-medium text-sm">Switch branches</p>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {branches.length === 0 ? (
                <div className="px-3 py-4 text-center text-muted-foreground text-sm">
                  No branches found
                </div>
              ) : (
                branches.map((branch) => (
                  <button
                    key={branch.name}
                    type="button"
                    onClick={() => {
                      onSelect(branch.name);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${
                      branch.name === currentBranch ? "bg-muted/50" : ""
                    }`}
                  >
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                    <span className="flex-1 truncate">{branch.name}</span>
                    {branch.isDefault && (
                      <span className="rounded bg-blue-100 px-1.5 py-0.5 text-blue-700 text-xs dark:bg-blue-900 dark:text-blue-300">
                        default
                      </span>
                    )}
                    {branch.name === currentBranch && (
                      <span className="text-green-600">✓</span>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
