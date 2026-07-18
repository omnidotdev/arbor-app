"use client";

/**
 * Persisted split/unified diff view preference.
 */

import { useCallback, useEffect, useState } from "react";

export type DiffViewMode = "split" | "unified";

const STORAGE_KEY = "arbor:diff-view-mode";

/**
 * Track the reviewer's split/unified preference, persisted in localStorage.
 * Defaults to split and hydrates the stored value after mount for SSR safety.
 */
export const useDiffViewMode = (): [
  DiffViewMode,
  (mode: DiffViewMode) => void,
] => {
  const [mode, setMode] = useState<DiffViewMode>("split");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "split" || stored === "unified") setMode(stored);
    } catch {
      // ignore unavailable storage
    }
  }, []);

  const update = useCallback((next: DiffViewMode) => {
    setMode(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore unavailable storage
    }
  }, []);

  return [mode, update];
};
