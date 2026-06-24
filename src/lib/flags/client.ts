import { initialize } from "unleash-client";

import { FLAGS_API_HOST, FLAGS_CLIENT_KEY } from "@/lib/config/env.config";

import type { Context, Unleash } from "unleash-client";

let flagClient: Unleash | null = null;

/**
 * Get the Unleash feature flag client (singleton, non-blocking).
 *
 * Uses `initialize` (NOT `startUnleash`): the client is returned synchronously
 * and loads flag state in the background. Until it is ready, evaluations fall
 * back to the supplied default, so a slow or unreachable flags server can never
 * block a request.
 *
 * `startUnleash` previously awaited readiness inside the per-request evaluation
 * path. When the flags server was unreachable that await never resolved, so
 * (1) `flagClient` was never assigned and every SSR render re-initialised a new
 * client -- hanging the render and leaking an `error` listener each time
 * (MaxListenersExceeded), and (2) the page never responded. Synchronous
 * `initialize` + a singleton set before returning fixes both.
 */
const getFlagClient = (): Unleash | null => {
  if (!FLAGS_CLIENT_KEY || !FLAGS_API_HOST) return null;
  if (flagClient) return flagClient;

  flagClient = initialize({
    url: FLAGS_API_HOST,
    appName: "arbor",
    customHeaders: {
      Authorization: FLAGS_CLIENT_KEY,
    },
  });
  // Attached once (singleton). The Unleash client is an EventEmitter that
  // throws on connection errors when no `error` listener is present; swallowing
  // keeps an unreachable flags server from crashing the app -- evaluations just
  // fall back to defaults until the server is reachable again.
  flagClient.on("error", () => {});

  return flagClient;
};

/**
 * User context for feature flag evaluation.
 * Used for user-targeted flags like maintenance mode bypass.
 */
export interface FlagContext {
  userId?: string;
  email?: string;
}

/**
 * Check if a feature flag is enabled. Returns `defaultValue` if flags are
 * unconfigured, the client has not finished loading, or evaluation fails.
 * Never blocks on the network.
 *
 * @param flagKey - The feature flag key
 * @param defaultValue - Default value if flag evaluation fails
 * @param context - Optional user context for targeted flags (e.g., admin bypass during maintenance mode)
 */
export const isEnabled = async (
  flagKey: string,
  defaultValue = false,
  context?: FlagContext,
): Promise<boolean> => {
  const client = getFlagClient();
  if (!client) return defaultValue;

  try {
    const unleashContext: Context | undefined = context
      ? {
          userId: context.userId,
          properties: context.email ? { email: context.email } : undefined,
        }
      : undefined;
    return client.isEnabled(flagKey, unleashContext, defaultValue);
  } catch {
    return defaultValue;
  }
};
