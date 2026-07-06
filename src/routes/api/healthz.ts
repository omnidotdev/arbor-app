import { createFileRoute } from "@tanstack/react-router";

// Probe target for kubelet liveness/readiness/startup checks.
// Deliberately has no beforeLoad, no external calls, no DB/auth.
// `/` runs the root route's beforeLoad which fans out to Better Auth
// on first hit; in a cold container that path can exceed the 1s probe
// timeout and trip kubelet into a clean-restart loop.
export const Route = createFileRoute("/api/healthz")({
  server: {
    handlers: {
      GET: () => new Response("ok", { status: 200 }),
    },
  },
});
