import { describe, expect, it } from "bun:test";

import { getServerAccessToken, runWithAccessToken } from "./serverAuthContext";

/**
 * Regression tests for the request-scoped SSR access token store.
 *
 * Prod incident: logged-in data pages (/repositories, /graph, /organizations)
 * threw an error boundary because the SSR GraphQL query went out without an
 * Authorization header (UNAUTHORIZED_FIELD_OR_TYPE / 401). The token lived in a
 * module-level singleton that was only set by a client-only effect, so it was
 * empty during SSR. The fix scopes the token to the request via
 * AsyncLocalStorage, populated by the request middleware around the render.
 */

describe("serverAuthContext", () => {
  it("exposes the token inside the runWithAccessToken scope", () => {
    const result = runWithAccessToken("token-123", () =>
      getServerAccessToken(),
    );
    expect(result).toBe("token-123");
  });

  it("returns null outside any scope", () => {
    expect(getServerAccessToken()).toBeNull();
  });

  it("returns null when the scope token is null or undefined", () => {
    expect(runWithAccessToken(null, () => getServerAccessToken())).toBeNull();
    expect(
      runWithAccessToken(undefined, () => getServerAccessToken()),
    ).toBeNull();
  });

  it("does not leak the token to sibling async contexts", async () => {
    const inside = await runWithAccessToken("scoped", async () => {
      // Token survives awaited continuations within the same async scope
      await Promise.resolve();
      return getServerAccessToken();
    });
    expect(inside).toBe("scoped");

    // Outside the scope the store is gone again
    expect(getServerAccessToken()).toBeNull();
  });

  it("isolates concurrent scopes from each other", async () => {
    const [a, b] = await Promise.all([
      runWithAccessToken("token-a", async () => {
        await new Promise((resolve) => setTimeout(resolve, 5));
        return getServerAccessToken();
      }),
      runWithAccessToken("token-b", async () => {
        return getServerAccessToken();
      }),
    ]);

    expect(a).toBe("token-a");
    expect(b).toBe("token-b");
  });
});

describe("getCurrentAuthHeaders (server token path)", () => {
  it("attaches a Bearer header when a server token is set", async () => {
    const { getCurrentAuthHeaders } = await import("./graphqlClientFactory");

    const headers = runWithAccessToken("abc.def.ghi", () =>
      getCurrentAuthHeaders(),
    );
    expect(headers).toEqual({ Authorization: "Bearer abc.def.ghi" });
  });

  it("attaches no header when there is no server token", async () => {
    const { getCurrentAuthHeaders } = await import("./graphqlClientFactory");

    expect(getCurrentAuthHeaders()).toEqual({});
  });
});
