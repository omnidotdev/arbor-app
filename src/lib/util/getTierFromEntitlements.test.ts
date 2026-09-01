import { describe, expect, it } from "bun:test";

import getTierFromEntitlements from "./getTierFromEntitlements";

import type {
  Entitlement,
  EntitlementsResponse,
} from "@/lib/providers/billing";

/**
 * The pricing page must resolve an org's tier even when there is no live Stripe
 * subscription (comped or manually granted plans). The tier lives in the
 * entitlement whose featureKey is "tier", with a JSONB-quoted value, so the
 * surrounding quotes are stripped and the result is normalized for display.
 */

const entitlement = (overrides: Partial<Entitlement>): Entitlement => ({
  id: "ent_1",
  productId: "prod_1",
  featureKey: "tier",
  value: '"pro"',
  source: "manual",
  validFrom: "2026-01-01T00:00:00Z",
  validUntil: null,
  ...overrides,
});

const response = (entitlements: Entitlement[]): EntitlementsResponse => ({
  billingAccountId: "acct_1",
  entityType: "organization",
  entityId: "org_1",
  entitlementVersion: 1,
  entitlements,
});

describe("getTierFromEntitlements", () => {
  it("reads the tier from a JSONB-quoted value", () => {
    expect(getTierFromEntitlements(response([entitlement({})]))).toBe("Pro");
  });

  it("resolves the team tier", () => {
    expect(
      getTierFromEntitlements(response([entitlement({ value: '"team"' })])),
    ).toBe("Team");
  });

  it("ignores non-tier entitlements", () => {
    expect(
      getTierFromEntitlements(
        response([
          entitlement({ featureKey: "max_projects", value: "10" }),
          entitlement({ value: '"pro"' }),
        ]),
      ),
    ).toBe("Pro");
  });

  it("returns null when no tier entitlement is present", () => {
    expect(
      getTierFromEntitlements(
        response([entitlement({ featureKey: "max_projects", value: "10" })]),
      ),
    ).toBeNull();
  });

  it("returns null for a missing or empty entitlements payload", () => {
    expect(getTierFromEntitlements(null)).toBeNull();
    expect(getTierFromEntitlements(undefined)).toBeNull();
    expect(getTierFromEntitlements(response([]))).toBeNull();
  });

  it("returns null when the tier value is empty", () => {
    expect(
      getTierFromEntitlements(response([entitlement({ value: null })])),
    ).toBeNull();
  });
});
