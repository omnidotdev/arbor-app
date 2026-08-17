import { defineConfig, devices } from "@playwright/test";

/**
 * Opt-in end-to-end smoke tests. Not wired into `bun test` or the CI `check` job, run
 * explicitly with `bun run test:e2e`.
 *
 * Targets `BASE_URL` (default http://localhost:3000). When no external `BASE_URL` is
 * provided, Playwright boots the dev server itself and reuses an already-running one
 */
const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const usesExternalServer = Boolean(process.env.BASE_URL);

export default defineConfig({
  testDir: "./e2e",
  // `.e2e.ts` (not `.spec.ts`) so the default `bun test` runner never picks these up
  testMatch: "**/*.e2e.ts",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: usesExternalServer
    ? undefined
    : {
        command: "bun run dev",
        url: BASE_URL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
