import { describe, expect, it } from "bun:test";

import isPageRequest from "./pageRequest";

describe("isPageRequest", () => {
  it("binds the session for router page renders", () => {
    expect(isPageRequest({ handlerType: "router", pathname: "/" })).toBe(true);
    expect(
      isPageRequest({ handlerType: "router", pathname: "/repositories" }),
    ).toBe(true);
  });

  it("skips server function calls, which resolve auth themselves", () => {
    expect(
      isPageRequest({ handlerType: "serverFn", pathname: "/_serverFn/abc" }),
    ).toBe(false);
  });

  it("skips /api server routes", () => {
    expect(
      isPageRequest({ handlerType: "router", pathname: "/api/auth/session" }),
    ).toBe(false);
    expect(
      isPageRequest({
        handlerType: "router",
        pathname: "/api/raw/me/repo/abc/README.md",
      }),
    ).toBe(false);
    expect(isPageRequest({ handlerType: "router", pathname: "/api" })).toBe(
      false,
    );
  });

  it("does not mistake a page whose path merely starts with api", () => {
    expect(isPageRequest({ handlerType: "router", pathname: "/apiary" })).toBe(
      true,
    );
  });
});
