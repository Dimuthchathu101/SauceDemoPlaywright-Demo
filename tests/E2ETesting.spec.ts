import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
require('dotenv').config();

test.describe('SauceDemo Login and Screenshot Testing', () => {
  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;

  test.beforeAll(async ({ browser }) => {
    // Create a new browser context and page
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage
    loginPage = new LoginPage(page);

    // Navigate to the login page
    await loginPage.goto();
  });

  test('TC_LF_001 - Login to the application and take a screenshot', async () => {
    // Get credentials from environment variables
    const username = process.env.SAUCEDEMO_USER!;
    const password = process.env.SAUCEDEMO_PASSWORD!;

    // Perform login
    await loginPage.login(username, password);

    // Wait for the inventory page to load (adjust selector as needed)
    await page.waitForSelector('.inventory_list'); // Example selector for the inventory page

    // Take a screenshot after login
    await page.screenshot({ path: 'screenshots/after-login.png', fullPage: true });

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/); // Verify URL after login
    await expect(page.locator('.title')).toHaveText('Products'); // Verify page title

    await page.screenshot({ path: 'screenshots/naviagate_to_products.png', fullPage: true });
  });

  test.afterAll(async () => {
    // Close the browser context after all tests
    await context.close();
  });
});