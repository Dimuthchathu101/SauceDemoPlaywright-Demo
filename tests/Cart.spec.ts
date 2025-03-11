import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv
import { CartPage } from '../pages/CartPage';

test.describe('SauceDemo Cart Testing', () => {

  let context: BrowserContext;
  let page: Page;
  let loginPage: LoginPage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  const username = process.env.SAUCEDEMO_USER!;
  const password = process.env.SAUCEDEMO_PASSWORD!;

  test('TC_CR_001	View cart with added products', async ({ browser }) => {
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

    // click on Cart to Navigate to Cart Page 
    await productPage.moveToCartPage();

        // Initialize the CartPage
    cartPage = new CartPage(page)
    await cartPage.cartItemsDisplayed();
    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/veiewCartWithAddedProducts.png', fullPage: true });
  });

  // TC_CR_002	Remove a product from the cart

  // TC_CR_003	Proceed to checkout from cart

  // TC_CR_004	Verify buttons and links are clearly visible
  
  test.afterAll(async () => {
    // Close the browser context after all tests
    await context.close();
  });
});