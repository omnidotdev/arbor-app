import { expect, test } from "@playwright/test";

/**
 * Minimal smoke coverage: the marketing surfaces render without a signed-in session.
 * Kept intentionally small so it can gate a deploy without depending on app data
 */

test("home page loads", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/arbor/i);
});

test("pricing page renders its heading", async ({ page }) => {
  await page.goto("/pricing");

  await expect(
    page.getByRole("heading", { name: /simple, transparent pricing/i }),
  ).toBeVisible();
});
