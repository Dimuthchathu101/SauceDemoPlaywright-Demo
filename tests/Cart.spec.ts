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

    console.log("****TC_CR_001	View cart with added products Starts****")
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

    console.log("****TC_CR_001	View cart with added products Completed****");
  });

  // TC_CR_002	Remove a product from the cart

  test('TC_CR_002 || Remove a product from the cart', async ({ browser }) => {

    console.log("****TC_CR_002 || Remove a product from the cart Started****");
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
    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/veiewCartBeforeRemoval.png', fullPage: true });
    // Remove Item from Cart
    await cartPage.removeItemFromCart();
    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/veiewCartAfterRemoval.png', fullPage: true });

    console.log("****TC_CR_002 || Remove a product from the cart Completed****");

  });

  // TC_CR_003	Proceed to checkout from cart

  test('TC_CR_003 Proceed to checkout from cart', async ({ browser }) => {

    console.log("****TC_CR_003 Proceed to checkout from cart Started****");
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

    // Remove Item from Cart
    await cartPage.proceesToCheckout();

    await expect(page).toHaveURL(/checkout-step-one.html/); // Verify URL after login
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information'); // Verify page title

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/processToCheckout.png', fullPage: true });

    console.log("****TC_CR_003 Proceed to checkout from cart Completed****");

  });


  // TC_CR_008	Verify Continue to Shoping function

  test('TC_CR_008 Verify Continue to Shoping function', async ({ browser }) => {

    console.log("****TC_CR_008 Verify Continue to Shoping function Started****");
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

    // Remove Item from Cart
    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory.html/); // Verify URL after login
    await expect(page.locator('.title')).toHaveText('Products'); // Verify page title

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/cartContinueShopping.png', fullPage: true });

    console.log("****TC_CR_008 Verify Continue to Shoping function Completed****");

  });

  // TC_CR_004	Verify buttons and links are clearly visible
  

  test('TC_CR_004	Verify buttons and links are clearly visible', async ({ browser }) => {

    console.log("****TC_CR_004	Verify buttons and links are clearly visible Started****");
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

    // Remove Item from Cart
    await cartPage.verifyAvailabilityofItemsAndLinks()

    // Take another screenshot after verification
    await page.screenshot({ path: 'screenshots/verifyAvalibilityofLinksAndButtons.png', fullPage: true });

    console.log("****TC_CR_004	Verify buttons and links are clearly visible Completed****");

  });
  
  test.afterEach(async () => {
    // Close the browser context after all tests
    await context.close();
  });
});