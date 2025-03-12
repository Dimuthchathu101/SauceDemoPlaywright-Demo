import { test, BrowserContext, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import 'dotenv/config'; // Use import for dotenv
import { CartPage } from '../pages/CartPage';
import { CheckoutInformationPage } from '../pages/CheckoutInfromationPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test.describe('SauceDemo End To End Testing', () => {


    let context: BrowserContext;
    let page: Page;
    let loginPage: LoginPage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    let checkoutInformationPage: CheckoutInformationPage;
    let checkouOverviewPage: CheckoutOverviewPage;
    let chekoutFinshPage: CheckoutCompletePage;
    const username = process.env.SAUCEDEMO_USER!;
    const password = process.env.SAUCEDEMO_PASSWORD!;

    // TC_CO_001 Verify checkouts overview page displays correct products
    test.only('SauceDemo End To End Testing', async ({ browser }) => {

      console.log("\n \n ****Final E2E Testing Starts****");
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
        await productPage.removeMultipleItemsFromChart();

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
        // Verify Avaialbility of product items
        await checkouOverviewPage.clicOnFinshButton();

        // Take another screenshot after entering fields
        await page.screenshot({ path: 'screenshots/checkoutOverviewPriceAndName.png', fullPage: true });

        chekoutFinshPage = new CheckoutCompletePage(page);

        await chekoutFinshPage.verifyThankYouMessage();
        await chekoutFinshPage.clickOnBackHomeButton();

        await expect(page).toHaveURL(/inventory.html/); // Verify URL after login
        await expect(page.locator('.title')).toHaveText('Products'); // Verify page title
        console.log("Verified Purchase and Return to Home")

        await page.screenshot({ path: 'screenshots/redirectToHomePageAfterCheckout.png', fullPage: true });

        console.log("\n \n ****Final E2E Testing Ends****");

    });


    test.afterEach(async () => {
        // Close the browser context after all tests
        await context.close();
    });
});

