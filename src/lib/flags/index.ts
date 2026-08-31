import { createServerFn } from "@tanstack/react-start";

import { ARBOR_LAUNCHED } from "@/lib/config/env.config";
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
 * Whether arbor is launched, resolved server-side. VITE_ARBOR_LAUNCHED is a
 * runtime env (deploy env), not baked into the client bundle, so the client
 * must read the value through the SSR context rather than import.meta.env
 */
export const fetchArborLaunched = createServerFn({ method: "GET" }).handler(
  () => ({ arborLaunched: ARBOR_LAUNCHED }),
);
