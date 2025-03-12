// pages/loginPage.js
const { expect } = require('@playwright/test');

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.backHomeButton = page.locator("//button[@id='back-to-products']");
    this.thankYouMessage = page.locator("//h2[@class='complete-header']");

  }

  async verifyThankYouMessage(){
    await expect(this.thankYouMessage).toBeVisible();
    console.log("Sauce Labs Bolt T Shirt avaialble");

  }
  
  async clickOnBackHomeButton(){
    await this.backHomeButton.click();
    console.log("Click on Cancel Button");
  }

}

module.exports = { CheckoutCompletePage };
