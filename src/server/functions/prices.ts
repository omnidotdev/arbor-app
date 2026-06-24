import { createServerFn } from "@tanstack/react-start";

import app from "@/lib/config/app.config";
import billing from "@/lib/providers/billing";

import type { BillingProvider, Price } from "@/lib/providers/billing";

/**
 * Resolve prices for this app, degrading to an empty list on failure.
 *
 * The billing provider can be disabled (noop returns []) or unreachable (throws).
 * Either way the /pricing route must still render, so failures resolve to an
 * empty list and the route falls back to the free tier rather than 500ing.
 * The provider is injectable for testing
 * @knipignore
 */
export const resolvePrices = async (
  provider: Pick<BillingProvider, "getPrices"> = billing,
): Promise<Price[]> => {
  try {
    return await provider.getPrices(app.name.toLowerCase());
  } catch (error) {
    console.warn("failed to fetch prices, billing unavailable", error);
    return [];
  }
};

/**
 * Fetch all prices for this app.
 * Prices are filtered by app name metadata and sorted by unit amount (ascending).
 */
export const getPrices = createServerFn().handler(
  async (): Promise<Price[]> => resolvePrices(),
);
