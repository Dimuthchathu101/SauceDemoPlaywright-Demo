// TC_CI_003	Verify buttons and links are clearly visible

import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage } from '../pages/CheckoutInfromationPage';

test.describe('SauceDemo Cart Testing', () => {


    let context: BrowserContext;
    let page: Page;
    let loginPage: LoginPage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    let checkoutInformationPage: CheckoutInformationPage;
    const username = process.env.SAUCEDEMO_USER!;
    const password = process.env.SAUCEDEMO_PASSWORD!;

    // TC_CI_001	Proceed with all required fields filled
    test('TC_CI_001 Proceed with all required fields filled', async ({ browser }) => {
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
        cartPage = new CartPage(page);

        // Remove Item from Cart
        await cartPage.proceesToCheckout();


        checkoutInformationPage = new CheckoutInformationPage(page);

        // Take another screenshot before entering fields
        await page.screenshot({ path: 'screenshots/checkoutInformationUnfilled.png', fullPage: true });

        await checkoutInformationPage.fillInformation("Dimuth", "Bandara", "60094");

        await expect(page).toHaveURL(/checkout-step-two.html/); // Verify URL after login
        await expect(page.locator('.title')).toHaveText('Checkout: Overview'); // Verify page title

        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutInformationFilled.png', fullPage: true });



    });



    test.afterEach(async () => {
        // Close the browser context after all tests
        await context.close();
    });
});

