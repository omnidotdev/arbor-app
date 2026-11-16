import { hubManageUrl, hubPlanUrl } from "@omnidotdev/providers/react";

import type { HubPlanInterval } from "@omnidotdev/providers/react";

/**
 * Plans are bought and managed on the Omni account hub, the one place every
 * product sells plans. Arbor shows its own pricing, but its plan and billing
 * actions link to the hub, which confirms the plan (names and prices from
 * Aether), runs checkout or the billing portal, and returns here. Each link is
 * empty when no account hub is configured, so the action is hidden rather than
 * dead
 */

const PRODUCT = "arbor";

/**
 * Arbor's absolute origin for a hub return. Prefers the configured base URL
 * and falls back to the browser origin, so the return stays absolute when the
 * build ships an empty base URL
 */
export const appOrigin = (baseUrl: string | undefined): string | undefined => {
  const base =
    baseUrl ||
    (typeof window === "undefined" ? undefined : window.location.origin);

  return base ? base.replace(/\/+$/, "") : undefined;
};

/** A workspace's dashboard, where the hub returns after a workspace's plan action */
export const workspaceReturnUrl = (
  baseUrl: string | undefined,
  workspaceSlug: string,
): string | undefined => {
  const origin = appOrigin(baseUrl);

  return origin ? `${origin}/@${workspaceSlug}` : undefined;
};

/**
 * Buy an Arbor plan on the account hub. Without a workspace the hub asks,
 * listing only workspaces the user owns or administers, and returns to pricing
 * @param accountBaseUrl - Account hub base URL
 * @param baseUrl - Arbor's base URL, for the return
 */
export const upgradePlanUrl = (
  accountBaseUrl: string | undefined,
  baseUrl: string | undefined,
  {
    plan,
    interval,
    workspaceSlug,
  }: { plan: string; interval: HubPlanInterval; workspaceSlug?: string },
): string => {
  const origin = appOrigin(baseUrl);

  return hubPlanUrl(accountBaseUrl, {
    product: PRODUCT,
    plan,
    interval,
    workspace: workspaceSlug,
    returnUrl: workspaceSlug
      ? workspaceReturnUrl(baseUrl, workspaceSlug)
      : origin
        ? `${origin}/pricing`
        : undefined,
  });
};

/**
 * Manage a workspace's Arbor plan (change or cancel it, payment method,
 * invoices) on the account hub, returning to the workspace's dashboard
 * @param accountBaseUrl - Account hub base URL
 * @param baseUrl - Arbor's base URL, for the return
 */
export const manageSubscriptionUrl = (
  accountBaseUrl: string | undefined,
  baseUrl: string | undefined,
  workspaceSlug: string,
): string =>
  hubManageUrl(accountBaseUrl, {
    product: PRODUCT,
    workspace: workspaceSlug,
    returnUrl: workspaceReturnUrl(baseUrl, workspaceSlug),
  });
