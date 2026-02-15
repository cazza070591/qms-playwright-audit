import { test, expect } from '@playwright/test';

test('Login Audit', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Fallback to 'student' if the environment variable isn't set
    const user = process.env.TEST_USER || 'student';
    const pass = process.env.TEST_PASSWORD || 'Password123';

    await page.fill('#username', user);
    await page.fill('#password', pass);
    await page.click('#submit');

    await expect(page).toHaveURL(/.*logged-in-successfully/);
});