import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv

test.describe('SauceDemo End to End Testing', () => {

  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let productPage: ProductPage;


  test('E2E Testing of the application', async ({ browser }) => {
    test.slow()
    // Use the same context and page from the first test
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage and log in again
    loginPage = new LoginPage(page);
    await loginPage.goto();
    const username = process.env.SAUCEDEMO_USER!;
    const password = process.env.SAUCEDEMO_PASSWORD!;
    await loginPage.login(username, password);

    // Initialize the ProductPage
    productPage = new ProductPage(page);

    // Verify add
    await productPage.addSauceLabPackIntoCart();
    await productPage.verifyAddSauceLabPackIntoCart();

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyAddOneItemIntoCart.png', fullPage: true });
  });

  test.afterEach(async () => {
    // Close the browser context after all tests
    await context.close();
  });
});