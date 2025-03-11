const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.saucelabsBackPackTitle = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
    this.saucelabsBackPackPrice = page.locator("//div[@class='inventory_list']//div[1]//div[2]//div[2]//div[1]");
    this.sauceLabsBackPackAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.allinventoryitems = page.locator("//div[@id='inventory_container']//div[@class='inventory_item']")
  }

  // Verify that the Sauce Labs Backpack is visible
  async verifySauceLabsBackPack() {
    await expect(this.saucelabsBackPackTitle).toBeVisible();
    console.log("Sauce Labs Back Pack title is visible");
    await expect(this.saucelabsBackPackPrice).toBeVisible();
    console.log("Sauce Labs Price is avaialbe")
    await expect (this.sauceLabsBackPackAddToCart).toBeVisible();
    console.log("Sauce Lab Add to Cart is avaialabe")
  }

  async verifyAllItemsAvailable() {
    const count = await this.allinventoryitems.count(); // Get number of items
    console.log(`Total items found: ${count}`); // Log total items

    expect(count).toBeGreaterThan(0); // Ensure there are items in the list

    for (let i = 0; i < count; i++) {
        await expect(this.allinventoryitems.nth(i)).toBeVisible(); // Check visibility of each item
    }

    console.log("All items are displayed in the inventory list");
}

}

module.exports = { ProductPage };
