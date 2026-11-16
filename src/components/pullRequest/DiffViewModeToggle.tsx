import { SegmentGroup } from "@omnidotdev/thornberry/segment-group";

import type { DiffViewMode } from "./useDiffViewMode";

const DIFF_VIEW_MODES = [
  { value: "unified", label: "Unified" },
  { value: "split", label: "Split" },
] satisfies { value: DiffViewMode; label: string }[];

const isDiffViewMode = (value: string | null): value is DiffViewMode =>
  value === "unified" || value === "split";

interface DiffViewModeToggleProps {
  mode: DiffViewMode;
  onModeChange: (mode: DiffViewMode) => void;
}

/**
 * Segmented control switching diffs between unified and split views.
 */
export function DiffViewModeToggle({
  mode,
  onModeChange,
}: DiffViewModeToggleProps) {
  return (
    <SegmentGroup
      aria-label="Diff view"
      size="sm"
      items={DIFF_VIEW_MODES}
      value={mode}
      onValueChange={({ value }) => {
        if (isDiffViewMode(value)) onModeChange(value);
      }}
    />
  );
}
