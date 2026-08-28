import { test, expect } from '@playwright/test';

test('Test 1: Verify login with valid credentials', async ({ page }) => {
  // 1. Open login page
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // 2. Fill in valid credentials
  await page.locator('#email').fill('customer@practicesoftwaretesting.com');
  await page.locator('#password').fill('welcome01');

  // 3. Click Login
  await page.getByRole('button', { name: 'Login' }).click();


  // 4. Wait for the account page to load
  await page.waitForURL('https://practicesoftwaretesting.com/account', {
    timeout: 30000,
  });

  // Assertion 1: Verify URL
  await expect(page).toHaveURL(
    'https://practicesoftwaretesting.com/account'
  );

  // Assertion 2: Verify page title
  await expect(page).toHaveTitle('My account');

  // 6. Open the navigation menu
  await page.getByRole('button', {
    name: 'Toggle navigation',
  }).click();

  // Assertion 3: Verify username appears in the navigation bar
  await expect(page.getByText('Jane Doe')).toBeVisible();
});
