import { afterEach, beforeEach, describe, expect, it } from "bun:test";

/**
 * Regression tests for the billing provider's graceful degradation.
 *
 * Prod incident: the /pricing route 500'd because the billing module threw
 * "AetherBillingProvider requires baseUrl in config" at module load when
 * BILLING_BASE_URL was unset. Importing this module must never throw, and the
 * pricing data path must return a safe empty result when billing is disabled.
 */

const BILLING_ENV_KEYS = ["BILLING_BASE_URL", "VITE_BILLING_BASE_URL"] as const;

describe("billing provider (billing disabled)", () => {
  let originalEnv: Record<string, string | undefined>;

  beforeEach(() => {
    originalEnv = {};
    for (const key of BILLING_ENV_KEYS) {
      originalEnv[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of BILLING_ENV_KEYS) {
      if (originalEnv[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = originalEnv[key];
      }
    }
  });

  it("does not throw at module load when BILLING_BASE_URL is unset", async () => {
    const mod = await import("./index");
    expect(mod.default).toBeDefined();
  });

  it("returns an empty price list when billing is disabled", async () => {
    const { default: billing } = await import("./index");

    const prices = await billing.getPrices("arbor");
    expect(prices).toEqual([]);
  });

  it("returns a null subscription when billing is disabled", async () => {
    const { default: billing } = await import("./index");

    const subscription = await billing.getSubscription(
      "organization",
      "org_1",
      "token",
    );
    expect(subscription).toBeNull();
  });
});
