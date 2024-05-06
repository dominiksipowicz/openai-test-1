import { test, expect } from '@playwright/test';

test.describe('Homepage basic chat text', () => {
  test('should display the text "basic chat" on the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=basic chat')).toBeVisible();
  });
});
