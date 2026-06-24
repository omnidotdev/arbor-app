# Arbor

Frontend application for Arbor, a code forge. Built on [TanStack Start](https://tanstack.com/start) (React, SSR) with GraphQL, Better Auth, and Tailwind CSS.

Product documentation lives in the [Armory](https://docs.omni.dev/arbor). This README only covers running the app locally.

## Prerequisites

- [Bun](https://bun.sh)
- Running [arbor-api](../arbor-api) (GraphQL) and an auth provider, reachable at the URLs in `.env.development`

## Setup

```sh
cp .env.local.template .env.local   # then fill in the values
bun install
```

`.env.development` holds non-secret defaults (API, auth, and flags URLs). `.env.local` holds secrets and local overrides (`AUTH_SECRET`, `RESEND_API_KEY`, `VITE_FLAGS_CLIENT_KEY`). Optional integrations (feature flags, email) degrade gracefully when unset.

## Run

Development (HTTPS via mkcert, GraphQL codegen in watch mode):

```sh
bun dev          # or `tilt up` for the full local stack
```

The app serves on https://localhost:3000.

Production:

```sh
bun build
bun start        # serves .output/server/index.mjs
```

Docker (multi-stage, builds with Bun, runs on Node):

```sh
docker build -t arbor-app .
docker run -p 3000:3000 arbor-app
```

## Diagnostics

- **Health check**: `GET /api/healthz` returns `ok` (200). It runs no auth, DB, or flag calls so it stays fast for kubelet liveness/readiness probes. Do not point probes at `/`, whose first-hit `beforeLoad` fans out to auth and flags and can exceed the probe timeout on a cold container.
- **Logs**: app logs go to stdout/stderr. In the cluster, follow the pod logs for the `arbor-app` deployment.
- **Feature flags / SSR**: the Unleash client (`src/lib/flags/client.ts`) is a non-blocking singleton initialized via `initialize` (not `startUnleash`). An unreachable flags server falls back to defaults rather than hanging SSR renders or leaking listeners. If renders hang or you see `MaxListenersExceeded`, check that this singleton path was not bypassed.

## Key commands

| Command | Description |
| --- | --- |
| `bun dev` | Dev server plus GraphQL codegen watcher |
| `bun build` / `bun start` | Production build / serve |
| `bun typecheck` | TypeScript check (`tsc --noEmit`) |
| `bun check` | Biome lint and format check |
| `bun format` | Biome format and write |
| `bun lint` | Biome lint |
| `bun knip` | Unused code and dependency detection |
| `bun graphql:generate` | Generate typed GraphQL hooks, SDK, and mocks |
| `bun email:preview` | Preview React Email templates |

## License

The code in this repository is licensed under Apache 2.0, &copy; [Omni LLC](https://omni.dev). See [LICENSE.md](LICENSE.md) for more information.
