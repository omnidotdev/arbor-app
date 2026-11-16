import { afterEach, describe, expect, test } from "bun:test";

import {
  appOrigin,
  manageSubscriptionUrl,
  upgradePlanUrl,
  workspaceReturnUrl,
} from "./hubLinks";

const HUB = "https://account.omni.dev";
const ARBOR = "https://arbor.omni.dev";

const params = (url: string) => Object.fromEntries(new URL(url).searchParams);

const stubWindowOrigin = (origin: string) => {
  (globalThis as { window?: unknown }).window = { location: { origin } };
};

afterEach(() => {
  delete (globalThis as { window?: unknown }).window;
});

describe("appOrigin", () => {
  test("uses the configured base URL without a trailing slash", () => {
    expect(appOrigin(`${ARBOR}/`)).toBe(ARBOR);
  });

  test("falls back to the browser origin when the base URL is empty", () => {
    stubWindowOrigin(ARBOR);

    expect(appOrigin("")).toBe(ARBOR);
  });

  test("is undefined on the server without a base URL", () => {
    expect(appOrigin(undefined)).toBeUndefined();
  });
});

describe("workspaceReturnUrl", () => {
  test("points at the workspace's dashboard", () => {
    expect(workspaceReturnUrl(ARBOR, "acme")).toBe(`${ARBOR}/@acme`);
  });
});

describe("upgradePlanUrl", () => {
  test("buys the plan on the account hub and returns to the workspace", () => {
    const url = upgradePlanUrl(HUB, ARBOR, {
      plan: "pro",
      interval: "month",
      workspaceSlug: "acme",
    });

    expect(url.startsWith(`${HUB}/billing?`)).toBe(true);
    expect(params(url)).toEqual({
      product: "arbor",
      plan: "pro",
      interval: "month",
      workspace: "acme",
      return: `${ARBOR}/@acme`,
    });
  });

  test("lets the hub ask for the workspace and returns to pricing", () => {
    expect(
      params(upgradePlanUrl(HUB, ARBOR, { plan: "team", interval: "year" })),
    ).toEqual({
      product: "arbor",
      plan: "team",
      interval: "year",
      return: `${ARBOR}/pricing`,
    });
  });

  test("returns to the browser origin when the base URL is empty", () => {
    stubWindowOrigin(ARBOR);

    expect(
      params(upgradePlanUrl(HUB, "", { plan: "pro", interval: "month" }))
        .return,
    ).toBe(`${ARBOR}/pricing`);
  });

  test("is empty when no account hub is configured", () => {
    expect(
      upgradePlanUrl(undefined, ARBOR, { plan: "pro", interval: "month" }),
    ).toBe("");
  });
});

describe("manageSubscriptionUrl", () => {
  test("manages the workspace's plan on the account hub", () => {
    const url = manageSubscriptionUrl(HUB, ARBOR, "acme");

    expect(url.startsWith(`${HUB}/billing?`)).toBe(true);
    expect(params(url)).toEqual({
      product: "arbor",
      workspace: "acme",
      manage: "1",
      return: `${ARBOR}/@acme`,
    });
  });

  test("is empty when no account hub is configured", () => {
    expect(manageSubscriptionUrl("", ARBOR, "acme")).toBe("");
  });
});
