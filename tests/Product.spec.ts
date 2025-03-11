import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv

test.describe('Product Page Testing', () => {

  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let productPage: ProductPage;
  const username = process.env.SAUCEDEMO_USER!;
  const password = process.env.SAUCEDEMO_PASSWORD!;


  test('TC_PR_001 - Verify products are displayed', async ({ browser }) => {
    test.slow()
    // Use the same context and page from the first test
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage and log in again
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    // Initialize the ProductPage
    productPage = new ProductPage(page);

    // Verify all items displayed in the Product Page
    await productPage.verifyAllItemsAvailable();

    // Verify that the Sauce Labs Backpack is visible
    await productPage.verifySauceLabsBackPack();

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyProductItems.png', fullPage: true });
  });

  test('TC_PR_002	Add a single product to the cart', async ({ browser }) => {
    test.slow()
    // Use the same context and page from the first test
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage and log in again
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    // Initialize the ProductPage
    productPage = new ProductPage(page);

    // Verify add
    await productPage.addSauceLabPackIntoCart();
    await productPage.verifyAddSauceLabPackIntoCart();
    await productPage.verifyCartBadgeCountAsOne();

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyAddOneItemIntoCart.png', fullPage: true });
  });


  test('TC_PR_003	Add multiple products to the cart', async ({ browser }) => {
    test.slow()
    // Use the same context and page from the first test
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage and log in again
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    // Initialize the ProductPage
    productPage = new ProductPage(page);

    // Verify add
    await productPage.addMultipleItemsIntoCart();
    await productPage.verifyCartBadgeCountAsMultiple();

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyAddMultipleItemsIntoCart.png', fullPage: true });
  });

  test.only('TC_PR_004	Remove a product from the cart', async ({ browser }) => {
    test.slow()
    // Use the same context and page from the first test
    context = await browser.newContext();
    page = await context.newPage();

    // Initialize the LoginPage and log in again
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    // Initialize the ProductPage
    productPage = new ProductPage(page);

    // Verify add
    await productPage.addMultipleItemsIntoCart();
    await productPage.removeMultipleItemsFromChart
    await productPage.verifyRemoveMultipleItemsFromChart();

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyRemoveMultipleItemsIntoCart.png', fullPage: true });
  });


  test.afterAll(async () => {
    // Close the browser context after all tests
    await context.close();
  });
});