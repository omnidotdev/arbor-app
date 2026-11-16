import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import billing from "@/lib/providers/billing";
import { authMiddleware } from "@/server/middleware";

const organizationSchema = z.object({
  organizationId: z.string().min(1),
});

/**
 * Validate access token or throw.
 */
const requireAccessToken = (accessToken: string | undefined): string => {
  if (!accessToken) {
    throw new Error("Access token required");
  }
  return accessToken;
};

/**
 * Get subscription details for an organization. Buying, changing, and
 * canceling a plan happen on the Omni account hub (see `lib/billing/hubLinks`),
 * not here
 */
export const getSubscription = createServerFn()
  .middleware([authMiddleware])
  .validator((data) => organizationSchema.parse(data))
  .handler(async ({ data, context }) => {
    return billing.getSubscription(
      "organization",
      data.organizationId,
      requireAccessToken(context.session.accessToken),
    );
  });

/**
 * Get entitlements for an organization.
 *
 * Used alongside {@link getSubscription} so the pricing page can resolve an org's
 * tier even when there is no live Stripe subscription (comped or manually granted
 * plans), where the subscription lookup returns null.
 */
export const getEntitlements = createServerFn()
  .middleware([authMiddleware])
  .validator((data) => organizationSchema.parse(data))
  .handler(async ({ data, context }) => {
    return billing.getEntitlements(
      "organization",
      data.organizationId,
      undefined,
      requireAccessToken(context.session.accessToken),
    );
  });
