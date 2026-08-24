import { describe, expect, it } from "bun:test";

import {
  getGraphqlErrorEntries,
  hasGraphqlErrorCode,
  isSessionAuthError,
} from "./graphqlError";

const clientError = (
  errors: Array<{ message?: string; extensions?: Record<string, unknown> }>,
  status?: number,
) => ({ response: { status, errors } });

describe("getGraphqlErrorEntries", () => {
  it("returns the response errors array", () => {
    const err = clientError([{ extensions: { code: "X" } }]);
    expect(getGraphqlErrorEntries(err)).toHaveLength(1);
  });

  it("returns [] for non-objects and shapes without errors", () => {
    expect(getGraphqlErrorEntries(null)).toEqual([]);
    expect(getGraphqlErrorEntries(new Error("boom"))).toEqual([]);
    expect(getGraphqlErrorEntries({ response: {} })).toEqual([]);
  });
});

describe("hasGraphqlErrorCode", () => {
  it("is true when an error carries the code", () => {
    expect(
      hasGraphqlErrorCode(
        clientError([{ extensions: { code: "NEEDED" } }]),
        "NEEDED",
      ),
    ).toBe(true);
  });

  it("is false when no error carries the code", () => {
    expect(
      hasGraphqlErrorCode(
        clientError([{ extensions: { code: "OTHER" } }]),
        "NEEDED",
      ),
    ).toBe(false);
    expect(hasGraphqlErrorCode(null, "NEEDED")).toBe(false);
  });
});

describe("isSessionAuthError", () => {
  it("is true on a 401 response status", () => {
    expect(isSessionAuthError(clientError([], 401))).toBe(true);
  });

  it("is true on the UNAUTHORIZED_FIELD_OR_TYPE code", () => {
    expect(
      isSessionAuthError(
        clientError([{ extensions: { code: "UNAUTHORIZED_FIELD_OR_TYPE" } }]),
      ),
    ).toBe(true);
  });

  it("is true on a per-error http 401", () => {
    expect(
      isSessionAuthError(
        clientError([{ extensions: { http: { status: 401 } } }]),
      ),
    ).toBe(true);
  });

  it("falls back to the serialized message", () => {
    expect(isSessionAuthError(new Error("Unauthorized field or type"))).toBe(
      true,
    );
    expect(isSessionAuthError(new Error("Request failed with 401"))).toBe(true);
  });

  it("is false for unrelated errors", () => {
    expect(isSessionAuthError(new Error("boom"))).toBe(false);
    expect(
      isSessionAuthError(clientError([{ extensions: { code: "OTHER" } }])),
    ).toBe(false);
    expect(isSessionAuthError(null)).toBe(false);
  });
});
