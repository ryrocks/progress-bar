import { test, expect } from "@playwright/test";

test("progress1 should +10", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("button:text('+10')");
  await expect(page.locator("#progress1")).toHaveText("10%");
});

test("progress1 should not +25", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator("select").selectOption("progress2");
  await page.click("button:text('+25')");
  await expect(page.locator("#progress1")).not.toHaveText("25%");
});
