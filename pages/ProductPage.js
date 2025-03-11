const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.saucelabsBackPackTitle = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
    this.saucelabsBackPackPrice = page.locator("//div[@class='inventory_list']//div[1]//div[2]//div[2]//div[1]");
    this.allinventoryitems = page.locator("//div[@id='inventory_container']//div[@class='inventory_item']")
    this.cartBadge = page.locator("//span[@data-test='shopping-cart-badge']");

    // Add to Cart
    this.sauceLabsBackPackAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.sauceLabsBikeLightAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']");
    this.sauceLabsBoltTShirtAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    this.sauceLabsFleeJacketAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']");
    this.sauceLabsOnesieAddToCart = page.locator("//button[@id='add-to-cart-sauce-labs-onesie']");

    // Remove From Cart
    this.sauceLabsBackPackRemoveFromCart = page.locator("//button[@id='remove-sauce-labs-backpack']");
    this.sauceLabsBikeLightRemoveFromCart = page.locator("//button[@id='remove-sauce-labs-bike-light']");
  }

  // Verify that the Sauce Labs Backpack is visible
  async verifySauceLabsBackPack() {
    await expect(this.saucelabsBackPackTitle).toBeVisible();
    console.log("Sauce Labs Back Pack title is visible");
    await expect(this.saucelabsBackPackPrice).toBeVisible();
    console.log("Sauce Labs Price is avaialbe")
    await expect(this.sauceLabsBackPackAddToCart).toBeVisible();
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

  async addSauceLabPackIntoCart() {
    await this.sauceLabsBackPackAddToCart.click();
    console.log("addSauceLabPackIntoCart() Completed")

  }
  async verifyAddSauceLabPackIntoCart() {
    await expect(this.sauceLabsBackPackRemoveFromCart).toBeVisible()
    console.log("verifyAddSauceLabPackIntoCart Sucessful")
  }

  async addMultipleItemsIntoCart() {
    await this.sauceLabsBackPackAddToCart.click();
    console.log("Added Sauce Labs Backpack to the cart.");

    await this.sauceLabsBikeLightAddToCart.click();
    console.log("Added Sauce Labs Bike Light to the cart.");

    await this.sauceLabsBoltTShirtAddToCart.click();
    console.log("Added Sauce Labs Bolt T-Shirt to the cart.");

    await this.sauceLabsFleeJacketAddToCart.click();
    console.log("Added Sauce Labs Fleece Jacket to the cart.");

    await this.sauceLabsOnesieAddToCart.click();
    console.log("Added Sauce Labs Onesie to the cart.");

    console.log("All selected items have been added to the cart.");
}


async verifyCartBadgeCountAsMultiple() {
  await expect(this.cartBadge).toBeVisible();
  
  const cartBadgeText = await this.cartBadge.textContent();
  await expect(cartBadgeText).not.toBeNull();
  await expect(cartBadgeText.trim()).toMatch(/^\d+$/); // Ensure it contains only numbers
  
  console.log(`Shopping cart badge displays '${cartBadgeText}'. Therefore, verify Cart Badge Count As Multiple Completed`);
}



  async removeMultipleItemsFromChart(){

  }

  async verifyRemoveMultipleItemsFromChart(){

  }

  async verifyCartBadgeCountAsOne() {
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartBadge).toHaveText("1");
    console.log("Shopping cart badge displays 1. Therefore verify Cart Badge Count As One Completed");
  }

  async removeSauceLabPackIntoCart() {
    await this.sauceLabsBackPackRemoveFromCart.click();
    console.log("Remove Sauce Lab Pack Into Cart");
  }


}

module.exports = { ProductPage };
