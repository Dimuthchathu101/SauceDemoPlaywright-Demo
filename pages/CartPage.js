// pages/loginPage.js
const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartPageItems = page.locator("//div[@data-test='inventory-item']");
        this.removeCartItem = page.locator("//button[@id='remove-sauce-labs-bolt-t-shirt']");
        this.proceedToCheckoutButton = page.locator("//button[@id='checkout']");
        this.continueShoppingButton = page.locator("//button[@id='continue-shopping']");

        // links
        this.sourceLabsBoltTShirt = page.locator("//div[normalize-space()='Sauce Labs Bolt T-Shirt']");
        this.sourceLabsFleeceJacket = page.locator("//div[normalize-space()='Sauce Labs Fleece Jacket']");

        // item details
        this.itemSourceLabsBoltTShirt = page.locator("//div[@class='inventory_details_name large_size']");
    }

    async cartItemsDisplayed() {
        const items = await this.cartPageItems;
        const itemCount = await items.count();

        // Validate all items are visible
        for (let i = 0; i < itemCount; i++) {
            await expect(items.nth(i)).toBeVisible();
        }

        console.log(`Total items displayed in the cart: ${itemCount}`);
    }

    async removeItemFromCart() {
        await this.removeCartItem.click();
    }

    async proceesToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickOnSauceLabsBoltTShirt() {
        await this.sourceLabsBoltTShirt.click();
    }

    async verifyClickOnSauceLabsBoltTShirt() {
        await expect(this.itemSourceLabsBoltTShirt).toBeVisible();
    }

    async verifyAvailabilityofItemsAndLinks(){
        await expect(this.proceedToCheckoutButton).toBeVisible();
        await expect(this.continueShoppingButton).toBeVisible();
        // links
        await expect(this.sourceLabsBoltTShirt).toBeVisible();
        await expect(this.sourceLabsFleeceJacket).toBeVisible();
        await this.clickOnSauceLabsBoltTShirt();
        await this.verifyClickOnSauceLabsBoltTShirt();
    }

}

module.exports = { CartPage };
