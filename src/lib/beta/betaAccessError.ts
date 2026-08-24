/**
 * Detection and handling for the server's closed-beta gate error.
 *
 * When the arbor-api beta gate is active, a non-whitelisted caller's gated
 * GraphQL operations are rejected with a GraphQLError carrying
 * `extensions.code = "BETA_ACCESS_REQUIRED"`. graphql-request surfaces this as a
 * ClientError; we inspect its per-error extension codes (with a serialized-
 * message fallback), reusing the shared graphql-error helpers.
 *
 * The gate decision is server-authoritative: env-whitelisted users and
 * billing-bypass admins never receive this error even without an approved
 * application, so the client must react to the error itself rather than guess
 * access from application status.
 */

import { hasGraphqlErrorCode } from "@/lib/util/graphqlError";

/** Where a non-whitelisted signed-in user is sent to apply for access. */
export const APPLY_PATH = "/apply";

const BETA_CODE = "BETA_ACCESS_REQUIRED";

/** Whether an unknown thrown value is the closed-beta gate error. */
export const isBetaAccessError = (error: unknown): boolean => {
  if (hasGraphqlErrorCode(error, BETA_CODE)) return true;

  const message = (error as Error)?.message ?? "";
  return message.includes(BETA_CODE);
};

/**
 * Redirect a non-whitelisted caller to the apply flow, in the browser only and
 * never when already there (so /apply's own carve-out queries cannot loop).
 * Uses a full-document navigation to reset any partially loaded gated state.
 */
export const redirectToApply = (): void => {
  if (typeof window === "undefined") return;
  if (window.location.pathname === APPLY_PATH) return;
  window.location.assign(APPLY_PATH);
};
