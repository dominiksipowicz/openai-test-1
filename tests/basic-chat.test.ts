import { test, expect } from '@playwright/test';

test('basic chat text on home page', async ({ page }) => {
  await page.goto('/');
  const title = page.locator('text=basic chat');
  await expect(title).toBeVisible();
});
