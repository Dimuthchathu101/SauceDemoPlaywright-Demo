const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.saucelabsBackPackTitle = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
  }

  // Verify that the Sauce Labs Backpack is visible
  async verifySauceLabsBackPack() {
    await expect(this.saucelabsBackPackTitle).toBeVisible();
    console.log("Sauce Labs Back Pack title is visible")
  }
}

module.exports = { ProductPage };
