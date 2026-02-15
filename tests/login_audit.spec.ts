import { test, expect } from '@playwright/test';

// This hook sets the stage for every audit below
test.beforeEach(async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
});

test('Valid Login Grants Access', async ({ page }) => {
  // We are now pulling credentials from the .env vault
  await page.getByLabel('Username').fill(process.env.TEST_USER!);
  await page.getByLabel('Password').fill(process.env.TEST_PASSWORD!);
  
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});