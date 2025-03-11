// pages/loginPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartPageItems = page.locator("//div[@data-test='inventory-item']");
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

}

module.exports = { CartPage };
