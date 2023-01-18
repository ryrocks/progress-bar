// e2e/example.spec.ts;

import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'About Page' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/about");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("h1")).toContainText("About Page");
});

test("progress1 should +10", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("button:text('+10')");
  await expect(page.locator("#progress1")).toHaveText("10");
});

test("progress1 should not +25", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator("select").selectOption("progress2");
  await page.click("button:text('+25')");
  await expect(page.locator("#progress1")).not.toHaveText("25");
});
