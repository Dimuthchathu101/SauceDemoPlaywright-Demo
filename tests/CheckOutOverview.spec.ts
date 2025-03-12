import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage } from '../pages/CheckoutInfromationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

test.describe('SauceDemo Cart Testing', () => {


    let context: BrowserContext;
    let page: Page;
    let loginPage: LoginPage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    let checkoutInformationPage: CheckoutInformationPage;
    let checkouOverviewPage: CheckoutOverviewPage;
    const username = process.env.SAUCEDEMO_USER!;
    const password = process.env.SAUCEDEMO_PASSWORD!;

    // TC_CO_001 Verify checkouts overview page displays correct products
    test('TC_CO_001 Verify checkouts overview page displays correct products', async ({ browser }) => {
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

        await checkoutInformationPage.fillInformation("Dimuth", "Bandara", "60094");

        checkouOverviewPage = new CheckoutOverviewPage(page);

        // Verify Avaialbility of product items
        await checkouOverviewPage.verifyProductAndPrice();

        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutOverviewPriceAndName.png', fullPage: true });

    });


    test('TC_CO_002	Complete the purchase', async ({ browser }) => {
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

        await checkoutInformationPage.fillInformation("Dimuth", "Bandara", "60094");

        checkouOverviewPage = new CheckoutOverviewPage(page);

        // Verify Avaialbility of product items
        await checkouOverviewPage.clickOnCancelButton();

        // Verify Successful Cancelation
        await expect(page).toHaveURL(/inventory.html/); // Verify URL after login
        await expect(page.locator('.title')).toHaveText('Products'); // Verify page title
        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutOverviewCancelPurchase.png', fullPage: true });

    });


    test('TC_CO_003 Cancel the purchase', async ({ browser }) => {
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

        await checkoutInformationPage.fillInformation("Dimuth", "Bandara", "60094");

        checkouOverviewPage = new CheckoutOverviewPage(page);

        // Verify Avaialbility of product items
        await checkouOverviewPage.clicOnFinshButton();

        // Verify Successful Cancelation
        await expect(page).toHaveURL(/checkout-complete.html/); // Verify URL after login
        await expect(page.locator('.title')).toHaveText('Checkout: Complete!'); // Verify page title
        console.log("Purchase Order Verified")
        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutOverviewConfirmPurchase.png', fullPage: true });

    });

    test('TC_CO_004	Verify buttons and links are clearly visible', async ({ browser }) => {
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

        await checkoutInformationPage.fillInformation("Dimuth", "Bandara", "60094");

        checkouOverviewPage = new CheckoutOverviewPage(page);

        // Verify Avaialbility of product items
        await checkouOverviewPage.verifyAvailabilityOfButtonsAndLinks();

        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutOverviewButtonsAndLinks.png', fullPage: true });

    });


    test.afterEach(async () => {
        // Close the browser context after all tests
        await context.close();
    });
});

