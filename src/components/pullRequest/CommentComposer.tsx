"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CommentComposerProps {
  /** Submit the composed body. Resolves on success, rejects on failure. */
  onSubmit: (body: string) => Promise<void>;
  /** Optional cancel affordance (reply/edit forms). */
  onCancel?: () => void;
  placeholder?: string;
  submitLabel?: string;
  /** Prefill the textarea (edit forms). */
  initialValue?: string;
  autoFocus?: boolean;
  /** Disable input, e.g. when there is no authenticated user. */
  disabled?: boolean;
  disabledReason?: string;
  className?: string;
}

/** Generic failure message; never surfaces server internals. */
const GENERIC_ERROR = "Something went wrong. Please try again.";

/**
 * Shared textarea + submit control for composing a new comment, reply or edit.
 * Clears on a successful create; edit forms typically unmount on success via
 * their `onCancel`/`onSubmit` handlers.
 */
export function CommentComposer({
  onSubmit,
  onCancel,
  placeholder = "Leave a comment",
  submitLabel = "Comment",
  initialValue = "",
  autoFocus = false,
  disabled = false,
  disabledReason,
  className,
}: CommentComposerProps) {
  const [body, setBody] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmed = body.trim();
  const canSubmit = trimmed.length > 0 && !isSubmitting && !disabled;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await onSubmit(trimmed);
      setBody("");
    } catch {
      setError(GENERIC_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder={disabled ? (disabledReason ?? placeholder) : placeholder}
        disabled={disabled || isSubmitting}
        // biome-ignore lint/a11y/noAutofocus: opt-in focus for reply/edit forms
        autoFocus={autoFocus}
        rows={3}
        className="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
        onKeyDown={(event) => {
          // submit on Cmd/Ctrl+Enter
          if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
            event.preventDefault();
            void handleSubmit();
          }
        }}
      />

      {error && (
        <p className="text-red-600 text-xs dark:text-red-400">{error}</p>
      )}

      <div className="flex items-center justify-end gap-2">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
        <Button
          type="button"
          size="sm"
          onClick={() => void handleSubmit()}
          disabled={!canSubmit}
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </Button>
      </div>
    </div>
  );
}
