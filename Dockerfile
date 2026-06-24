# syntax=docker/dockerfile:1

FROM oven/bun:1 AS base
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
FROM node:24-alpine@sha256:156b55f92e98ccd5ef49578a8cea0df4679826564bad1c9d4ef04462b9f0ded6 AS runner
WORKDIR /app
ENV NODE_ENV=production

# Nitro bundles production deps into .output/server/node_modules.
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
