"use client";

import { Check, MessageSquare, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatTimestamp, reviewStateMeta } from "./reviewTypes";

import type { PullRequestReview, ReviewState } from "./reviewTypes";

interface ReviewSummaryBarProps {
  reviews: PullRequestReview[];
  onSubmit: (input: {
    state: ReviewState;
    body: string | null;
  }) => Promise<void>;
  isSubmitting: boolean;
  /** Whether the current user can submit a review (authenticated). */
  canReview: boolean;
}

const GENERIC_ERROR = "Something went wrong. Please try again.";

const REVIEW_OPTIONS: {
  value: ReviewState;
  label: string;
  icon: typeof Check;
}[] = [
  { value: "approved", label: "Approve", icon: Check },
  { value: "changes_requested", label: "Request changes", icon: X },
  { value: "commented", label: "Comment", icon: MessageSquare },
];

/** Normalize a stored review state to a known verdict for display. */
const normalizeReviewState = (state: string): ReviewState =>
  state === "approved" || state === "changes_requested" || state === "commented"
    ? state
    : "commented";

/**
 * Panel listing existing reviews and a form to submit a new one
 * (Approve / Request changes / Comment) with an optional body.
 */
export function ReviewSummaryBar({
  reviews,
  onSubmit,
  isSubmitting,
  canReview,
}: ReviewSummaryBarProps) {
  const [selected, setSelected] = useState<ReviewState>("commented");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (isSubmitting || !canReview) return;
    setError(null);
    try {
      await onSubmit({ state: selected, body: body.trim() || null });
      setBody("");
    } catch {
      setError(GENERIC_ERROR);
    }
  };

  return (
    <div className="rounded-lg border">
      <div className="border-b px-4 py-3">
        <h2 className="font-semibold text-lg">Reviews</h2>
      </div>

      {reviews.length === 0 ? (
        <p className="px-4 py-3 text-muted-foreground text-sm">
          No reviews yet.
        </p>
      ) : (
        <ul className="divide-y">
          {reviews.map((review) => {
            const meta = reviewStateMeta[normalizeReviewState(review.state)];
            return (
              <li
                key={review.rowId}
                className="flex flex-col gap-1 px-4 py-3 text-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">
                    {review.reviewer?.username ?? "Unknown"}
                  </span>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 font-medium text-xs",
                      meta.className,
                    )}
                  >
                    {meta.label}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {formatTimestamp(review.submittedAt ?? review.createdAt)}
                  </span>
                </div>
                {review.body && (
                  <p className="whitespace-pre-wrap break-words text-muted-foreground">
                    {review.body}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <div className="border-t p-4">
        <h3 className="mb-2 font-medium text-sm">Submit a review</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          {REVIEW_OPTIONS.map((option) => {
            const Icon = option.icon;
            const isActive = selected === option.value;
            return (
              <Button
                key={option.value}
                type="button"
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                className={cn("border", isActive && "border-primary")}
                onClick={() => setSelected(option.value)}
                aria-pressed={isActive}
                disabled={!canReview}
              >
                <Icon className="h-4 w-4" />
                {option.label}
              </Button>
            );
          })}
        </div>

        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder={
            canReview ? "Optional review summary" : "Sign in to submit a review"
          }
          disabled={!canReview || isSubmitting}
          rows={3}
          className="w-full resize-y rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
        />

        {error && (
          <p className="mt-2 text-red-600 text-xs dark:text-red-400">{error}</p>
        )}

        <div className="mt-3 flex justify-end">
          <Button
            type="button"
            size="sm"
            onClick={() => void handleSubmit()}
            disabled={!canReview || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit review"}
          </Button>
        </div>
      </div>
    </div>
  );
}
