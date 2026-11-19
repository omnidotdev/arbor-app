import { describe, expect, it } from "bun:test";

import {
  getRequestSession,
  getServerAccessToken,
  getServerSession,
  runWithAccessToken,
  runWithSession,
} from "./serverAuthContext";

import type { GetAuthSession } from "@omnidotdev/providers/auth";

const makeSession = (accessToken?: string): GetAuthSession => ({
  accessToken,
  organizations: [],
  user: {
    id: "user-1",
    name: "User",
    email: "user@example.com",
    emailVerified: true,
  },
  session: { token: "session-1", expiresAt: new Date(0) },
});

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

describe("runWithSession", () => {
  it("binds the session's access token for SSR GraphQL queries", async () => {
    const { getCurrentAuthHeaders } = await import("./graphqlClientFactory");

    const headers = runWithSession(makeSession("ssr.token"), () =>
      getCurrentAuthHeaders(),
    );
    expect(headers).toEqual({ Authorization: "Bearer ssr.token" });
  });

  it("binds a signed-out request as null, not as unresolved", () => {
    expect(runWithSession(null, () => getServerSession())).toBeNull();
    expect(runWithSession(null, () => getServerAccessToken())).toBeNull();
  });

  it("leaves the session unresolved outside a page request", () => {
    expect(getServerSession()).toBeUndefined();
    expect(
      runWithAccessToken("token", () => getServerSession()),
    ).toBeUndefined();
  });
});

describe("getRequestSession", () => {
  /**
   * Regression: a page render resolved the session twice (request middleware,
   * then the root route's fetchSession), each refreshing the access token from
   * the same pre-rotation cookie. The bound session must be reused instead
   */
  it("reuses the page request's session without resolving again", async () => {
    const bound = makeSession("bound.token");
    let resolves = 0;
    const resolve = async () => {
      resolves += 1;
      return makeSession("second.token");
    };

    const session = await runWithSession(bound, () =>
      getRequestSession(resolve),
    );

    expect(session).toBe(bound);
    expect(resolves).toBe(0);
  });

  it("reuses a signed-out page request without resolving again", async () => {
    let resolves = 0;

    const session = await runWithSession(null, () =>
      getRequestSession(async () => {
        resolves += 1;
        return makeSession("unexpected");
      }),
    );

    expect(session).toBeNull();
    expect(resolves).toBe(0);
  });

  it("resolves when no page session is bound (client server-fn call)", async () => {
    const fresh = makeSession("fresh.token");

    expect(await getRequestSession(async () => fresh)).toBe(fresh);
  });
});
