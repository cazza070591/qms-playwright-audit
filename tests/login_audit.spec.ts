import { test, expect } from '@playwright/test';

// 1. Define the scenarios at the top level
const auditScenarios = [
  { desc: 'Positive Audit', user: 'student', pass: 'Password123', expectedUrl: /.*success/ },
  { desc: 'Negative Audit', user: 'invalidUser', pass: 'wrongPass', expectedUrl: null }
];

// 2. Run the loop to execute each scenario
for (const scenario of auditScenarios) {
  test(scenario.desc, async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    await page.fill('#username', scenario.user);
    await page.fill('#password', scenario.pass);
    await page.click('#submit');

    if (scenario.expectedUrl) {
      // Logic for Positive Case
      await expect(page).toHaveURL(scenario.expectedUrl);
    } else {
      // Logic for Negative Case: Expect an error message
      const errorMsg = page.locator('#error');
      await expect(errorMsg).toBeVisible();
      await expect(errorMsg).toContainText('Your username is invalid!');
    }
  });
}