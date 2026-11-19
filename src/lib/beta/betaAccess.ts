import { redirect } from "@tanstack/react-router";

import { APPLY_PATH, isBetaAccessError } from "@/lib/beta/betaAccessError";
import { graphqlFetch } from "@/lib/graphql/graphqlFetch";

import type { QueryClient } from "@tanstack/react-query";

/**
 * Cheapest gated operation: the Relay root `query` field resolves without
 * touching the database, and it is outside the beta gate's carve-out, so the
 * API rejects it with BETA_ACCESS_REQUIRED exactly when it would reject the
 * app's real queries
 */
const BETA_ACCESS_PROBE = "query BetaAccessProbe { query { __typename } }";

/** How long a probe result is reused before asking the API again */
const BETA_ACCESS_STALE_MS = 5 * 60 * 1000;

type Probe = () => Promise<unknown>;

const defaultProbe: Probe = () =>
  graphqlFetch<{ query: { __typename: string } }, Record<string, never>>(
    BETA_ACCESS_PROBE,
  )();

/**
 * Whether the API lets the caller through the closed-beta gate. False only for
 * the gate's own BETA_ACCESS_REQUIRED rejection; any other failure (network,
 * expired token) is rethrown, since it says nothing about beta access
 */
export const probeBetaAccess = async (
  probe: Probe = defaultProbe,
): Promise<boolean> => {
  try {
    await probe();
    return true;
  } catch (error) {
    if (isBetaAccessError(error)) return false;
    throw error;
  }
};

/**
 * Send a signed-in user without closed-beta access to the apply flow before
 * any gated page loads, so they get a redirect (server-side on a page load)
 * instead of a page whose queries all fail. The decision is the API's, cached
 * per user for a few minutes. A probe that fails for any other reason lets the
 * page load and handle that error itself
 */
export const ensureBetaAccess = async ({
  queryClient,
  userId,
  probe = defaultProbe,
}: {
  queryClient: QueryClient;
  userId: string;
  probe?: Probe;
}): Promise<void> => {
  let hasAccess: boolean;
  try {
    hasAccess = await queryClient.ensureQueryData({
      queryKey: ["BetaAccess", userId],
      queryFn: () => probeBetaAccess(probe),
      staleTime: BETA_ACCESS_STALE_MS,
    });
  } catch {
    return;
  }

  if (!hasAccess) throw redirect({ to: APPLY_PATH });
};
