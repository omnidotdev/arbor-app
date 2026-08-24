import { describe, expect, it } from "bun:test";

import { isBetaAccessError } from "./betaAccessError";

const clientError = (code: string) => ({
  response: { errors: [{ extensions: { code } }] },
});

describe("isBetaAccessError", () => {
  it("is true for a BETA_ACCESS_REQUIRED extensions code", () => {
    expect(isBetaAccessError(clientError("BETA_ACCESS_REQUIRED"))).toBe(true);
  });

  it("falls back to the serialized message", () => {
    expect(
      isBetaAccessError(new Error("GraphQL error: BETA_ACCESS_REQUIRED")),
    ).toBe(true);
  });

  it("is false for other errors", () => {
    expect(isBetaAccessError(clientError("UNAUTHORIZED_FIELD_OR_TYPE"))).toBe(
      false,
    );
    expect(isBetaAccessError(new Error("boom"))).toBe(false);
    expect(isBetaAccessError(null)).toBe(false);
  });
});
