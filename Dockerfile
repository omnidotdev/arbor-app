# syntax=docker/dockerfile:1

FROM oven/bun:1.4.1@sha256:9e123d5fc069e29d519fd4c981afb61b8542ac80274771961136db1e4538d53e AS base
WORKDIR /app

# Build
FROM base AS builder
COPY package.json bun.lock .env.production ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# TODO: Switch back to Bun runtime once module resolution is fixed
# Bun doesn't properly resolve externalized Nitro packages (srvx, react-dom/server)
# Error: Cannot find package 'srvx' from '/app/.output/server/chunks/virtual/entry.mjs'
# Error: Cannot find module 'react-dom/server'
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Nitro bundles production deps into .output/server/node_modules.
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
