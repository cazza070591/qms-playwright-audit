import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage'; // Import the map

test('Audit Rule 1: POM-based Login', async ({ page }) => {
  const loginPage = new LoginPage(page); // Initialize the map

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Look how clean this is! No more messy locators here.
  await loginPage.login(process.env.TEST_USER!, process.env.TEST_PASSWORD!);

  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});