import { createFileRoute } from "@tanstack/react-router";

import { getAuth } from "@/lib/auth/getAuth";
import { API_BASE_URL } from "@/lib/config/env.config";

/**
 * Same-origin proxy for raw git bytes (used by the image and rich diff views).
 *
 * The arbor-api raw endpoint lives on a different origin and is auth gated, so a
 * cross-origin `<img>` would drop the caller's auth for private repos and taint
 * a `<canvas>` (breaking the difference mode's pixel compositing). This handler
 * runs server-side, resolves the caller's session the same way the SSR request
 * middleware does, forwards a bearer token to arbor-api, and streams the bytes
 * back from the app's own origin with the upstream Content-Type.
 *
 * Read only: it forwards GET and passes upstream 403/404 straight through.
 */
export const Route = createFileRoute("/api/raw/$owner/$repo/$oid/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const { owner, repo, oid } = params;
        const path = params._splat ?? "";

        if (!API_BASE_URL) {
          return new Response(null, { status: 503 });
        }

        // Resolve the caller's access token from their session. Image requests
        // do not carry an `Accept: text/html` header, so the SSR auth middleware
        // does not populate the request-scoped token for them, and we resolve it
        // here from the same cached auth flow the app uses everywhere else
        let accessToken: string | undefined;
        try {
          const session = await getAuth(request);
          accessToken = session?.accessToken;
        } catch {
          // Unauthenticated or transient auth failure: forward with no token and
          // let arbor-api decide (public repos still resolve, private 403)
        }

        const encodedPath = path.split("/").map(encodeURIComponent).join("/");
        const upstreamUrl = `${API_BASE_URL}/git/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/raw/${encodeURIComponent(oid)}/${encodedPath}`;

        let upstream: Response;
        try {
          upstream = await fetch(upstreamUrl, {
            headers: accessToken
              ? { Authorization: `Bearer ${accessToken}` }
              : {},
          });
        } catch {
          return new Response(null, { status: 502 });
        }

        if (!upstream.ok) {
          return new Response(null, { status: upstream.status });
        }

        const contentType =
          upstream.headers.get("content-type") ?? "application/octet-stream";
        const body = await upstream.arrayBuffer();

        return new Response(body, {
          headers: {
            "Content-Type": contentType,
            // private: the bytes are auth scoped and must not be shared by any
            // intermediary cache across users
            "Cache-Control": "private, max-age=300",
          },
        });
      },
    },
  },
});
