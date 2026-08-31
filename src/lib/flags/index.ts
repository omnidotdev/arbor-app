import { createServerFn } from "@tanstack/react-start";

import {
  ARBOR_FOUNDER_USER_IDS,
  ARBOR_LAUNCHED,
} from "@/lib/config/env.config";
import { isEnabled } from "./client";

import type { FlagContext } from "./client";

export const FLAGS = {
  MAINTENANCE: "arbor-app-maintenance-mode",
} as const;

/**
 * Fetch the value of the maintenance mode feature flag.
 * Accepts optional user context for admin bypass (@omni.dev users).
 */
export const fetchMaintenanceMode = createServerFn({ method: "GET" })
  .validator((data: FlagContext | undefined) => data)
  .handler(async ({ data: context }) => {
    const isMaintenanceMode = await isEnabled(
      FLAGS.MAINTENANCE,
      false,
      context,
    );
    return { isMaintenanceMode };
  });

/**
 * Whether the current user may reach arbor, resolved server-side: true when
 * arbor is launched, or when the user is a founder (ARBOR_FOUNDER_USER_IDS), so
 * the /apply approved state shows "you're in" for them and "coming soon" for
 * everyone else pre-launch. Resolved here because the launch/founder env is
 * runtime-only (not baked into the client bundle); the client reads the result
 * through SSR context. Checks both the Gatekeeper sub and the row id so it works
 * regardless of which the whitelist holds
 */
export const fetchArborAccess = createServerFn({ method: "GET" })
  .validator((data: { userId?: string; rowId?: string } | undefined) => data)
  .handler(({ data }) => {
    const isFounder =
      (!!data?.userId && ARBOR_FOUNDER_USER_IDS.includes(data.userId)) ||
      (!!data?.rowId && ARBOR_FOUNDER_USER_IDS.includes(data.rowId));
    return { canAccessArbor: ARBOR_LAUNCHED || isFounder };
  });
