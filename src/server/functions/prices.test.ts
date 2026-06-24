import { describe, expect, it } from "bun:test";

import { resolvePrices } from "./prices";

/**
 * Regression test for the pricing data path.
 *
 * resolvePrices feeds the /pricing route loader. If the billing provider throws
 * (misconfigured or the billing service is unreachable) or is disabled (noop),
 * the loader must not 500. It should resolve to an empty price list so the route
 * still renders the free tier.
 */

describe("resolvePrices", () => {
  it("returns an empty list when the billing provider throws", async () => {
    const prices = await resolvePrices({
      getPrices: () => Promise.reject(new Error("billing unreachable")),
    });
    expect(prices).toEqual([]);
  });

  it("returns an empty list when billing is disabled (noop)", async () => {
    const prices = await resolvePrices({
      getPrices: () => Promise.resolve([]),
    });
    expect(prices).toEqual([]);
  });
});
