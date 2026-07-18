"use client";

/**
 * Per-pull-request "viewed" file state, persisted in localStorage.
 * Server-side persistence is a later phase.
 */

import { useCallback, useEffect, useState } from "react";

const storageKey = (pullRequestId: string) =>
  `arbor:pr-viewed:${pullRequestId}`;

interface UseViewedFilesResult {
  /** Set of file paths the current user has marked as viewed. */
  viewed: Set<string>;
  /** Whether a given path is marked viewed. */
  isViewed: (path: string) => boolean;
  /** Toggle the viewed state for a path. */
  toggle: (path: string) => void;
  /** Number of viewed files. */
  count: number;
}

/**
 * Track which files in a pull request have been viewed, keyed by pull request id.
 * Reads from localStorage on mount to stay SSR safe (no window access at render).
 */
export const useViewedFiles = (
  pullRequestId: string | undefined,
): UseViewedFilesResult => {
  const [viewed, setViewed] = useState<Set<string>>(() => new Set());

  // hydrate from localStorage after mount to avoid SSR mismatches
  useEffect(() => {
    if (!pullRequestId) return;
    try {
      const raw = window.localStorage.getItem(storageKey(pullRequestId));
      if (raw) setViewed(new Set(JSON.parse(raw) as string[]));
      else setViewed(new Set());
    } catch {
      setViewed(new Set());
    }
  }, [pullRequestId]);

  const persist = useCallback(
    (next: Set<string>) => {
      if (!pullRequestId) return;
      try {
        window.localStorage.setItem(
          storageKey(pullRequestId),
          JSON.stringify([...next]),
        );
      } catch {
        // storage unavailable (private mode, quota): keep in-memory only
      }
    },
    [pullRequestId],
  );

  const toggle = useCallback(
    (path: string) => {
      setViewed((prev) => {
        const next = new Set(prev);
        if (next.has(path)) next.delete(path);
        else next.add(path);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const isViewed = useCallback((path: string) => viewed.has(path), [viewed]);

  return { viewed, isViewed, toggle, count: viewed.size };
};
