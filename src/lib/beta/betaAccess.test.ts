import { describe, expect, it } from "bun:test";

import { QueryClient } from "@tanstack/react-query";
import { isRedirect } from "@tanstack/react-router";

import { ensureBetaAccess, probeBetaAccess } from "./betaAccess";

/** graphql-request ClientError shape carrying a GraphQL error code */
const gqlError = (code: string) =>
  Object.assign(new Error(code), {
    response: { errors: [{ extensions: { code } }] },
  });

const betaDenied = async () => {
  throw gqlError("BETA_ACCESS_REQUIRED");
};
const allowed = async () => ({ query: { __typename: "Query" } });

describe("probeBetaAccess", () => {
  it("is true when the gated probe succeeds", async () => {
    expect(await probeBetaAccess(allowed)).toBe(true);
  });

  it("is false when the API rejects it with BETA_ACCESS_REQUIRED", async () => {
    expect(await probeBetaAccess(betaDenied)).toBe(false);
  });

  it("rethrows unrelated failures", async () => {
    await expect(
      probeBetaAccess(async () => {
        throw new Error("fetch failed");
      }),
    ).rejects.toThrow("fetch failed");
  });
});

describe("ensureBetaAccess", () => {
  /**
   * Regression: a signed-in user without beta access opening /repositories got
   * a page whose gated queries all failed; they must be redirected to /apply
   * before the page loads
   */
  it("redirects a user without beta access to /apply", async () => {
    const error = await ensureBetaAccess({
      queryClient: new QueryClient(),
      userId: "user-1",
      probe: betaDenied,
    }).catch((e: unknown) => e);

    expect(isRedirect(error)).toBe(true);
    expect((error as { options: { to: string } }).options.to).toBe("/apply");
  });

  it("lets a user with beta access through", async () => {
    await expect(
      ensureBetaAccess({
        queryClient: new QueryClient(),
        userId: "user-1",
        probe: allowed,
      }),
    ).resolves.toBeUndefined();
  });

  it("does not redirect when the probe fails for another reason", async () => {
    await expect(
      ensureBetaAccess({
        queryClient: new QueryClient(),
        userId: "user-1",
        probe: async () => {
          throw gqlError("UNAUTHORIZED_FIELD_OR_TYPE");
        },
      }),
    ).resolves.toBeUndefined();
  });

  it("asks the API once per user while the result is fresh", async () => {
    const queryClient = new QueryClient();
    let probes = 0;
    const probe = async () => {
      probes += 1;
      return allowed();
    };

    await ensureBetaAccess({ queryClient, userId: "user-1", probe });
    await ensureBetaAccess({ queryClient, userId: "user-1", probe });
    await ensureBetaAccess({ queryClient, userId: "user-2", probe });

    expect(probes).toBe(2);
  });
});
