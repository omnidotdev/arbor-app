import { describe, expect, it } from "bun:test";

import { GRAPH_TIER_ERROR_CODE, getGraphTierRequirement } from "./graphTier";

/**
 * The API gates graph capabilities behind subscription tiers. When an org is below
 * the required tier it returns a GraphQL error carrying GRAPH_TIER_REQUIRED plus the
 * required level, which graphql-request throws as a ClientError. getGraphTierRequirement
 * must recognize that shape so the UI can render a labeled upgrade prompt instead of a
 * raw error, and must ignore every other error
 */

const clientError = (
  extensions: Record<string, unknown>,
  message = "This feature requires a higher plan.",
) => ({
  response: {
    errors: [{ message, extensions }],
  },
});

describe("getGraphTierRequirement", () => {
  it("maps requiredLevel 1 to the Pro plan", () => {
    const result = getGraphTierRequirement(
      clientError({ code: GRAPH_TIER_ERROR_CODE, requiredLevel: 1 }),
    );

    expect(result).not.toBeNull();
    expect(result?.plan).toBe("Pro");
    expect(result?.requiredLevel).toBe(1);
    expect(result?.message).toBe("This feature requires a higher plan.");
  });

  it("maps requiredLevel 2 to the Team plan", () => {
    const result = getGraphTierRequirement(
      clientError({ code: GRAPH_TIER_ERROR_CODE, requiredLevel: 2 }),
    );

    expect(result?.plan).toBe("Team");
    expect(result?.requiredLevel).toBe(2);
  });

  it("defaults to Pro when the required level is missing", () => {
    const result = getGraphTierRequirement(
      clientError({ code: GRAPH_TIER_ERROR_CODE }),
    );

    expect(result?.plan).toBe("Pro");
    expect(result?.requiredLevel).toBe(1);
  });

  it("returns null for an unrelated GraphQL error", () => {
    const result = getGraphTierRequirement(
      clientError({ code: "UNAUTHORIZED_FIELD_OR_TYPE" }),
    );

    expect(result).toBeNull();
  });

  it("returns null for non-object and empty errors", () => {
    expect(getGraphTierRequirement(null)).toBeNull();
    expect(getGraphTierRequirement(new Error("boom"))).toBeNull();
    expect(getGraphTierRequirement({ response: { errors: [] } })).toBeNull();
  });
});
