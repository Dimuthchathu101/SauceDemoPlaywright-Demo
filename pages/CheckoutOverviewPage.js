// pages/loginPage.js
const { expect } = require('@playwright/test');

class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.sauceLabsBoltTShirt = page.locator("//div[normalize-space()='Sauce Labs Bolt T-Shirt']");
    this.sauceLabsBoltTShirtPrice = page.locator("//div[@class='inventory_item_price'][normalize-space()='$15.99']");
    this.sauceLabsBoltTShirtQuantity = page.locator("//body/div[@id='root']/div[@id='page_wrapper']/div[@id='contents_wrapper']/div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[3]/div[1]");
    this.sauceLabsFleeceacket = page.locator("//div[normalize-space()='Sauce Labs Fleece Jacket']");
    this.sauceLabsFleeceacketQuantity = page.locator("//body/div[@id='root']/div[@id='page_wrapper']/div[@id='contents_wrapper']/div[@id='checkout_summary_container']/div/div[@class='cart_list']/div[4]/div[1]");
    this.sauceLabsFleeceacketPrice = page.locator("//div[@class='inventory_item_price'][normalize-space()='$49.99']");
    this.lastNameField = page.locator("//input[@id='postal-code']");

    this.paymentInformation = page.locator("//div[normalize-space()='Payment Information:']");
    this.shippingInfomration = page.locator("//div[normalize-space()='Shipping Information:']");
    this.priceTotoal = page.locator("//div[normalize-space()='Price Total']");

    this.cartButton = page.locator("//a[@class='shopping_cart_link']");
    this.sideNavButton = page.locator("//button[@id='react-burger-menu-btn']");
    this.cancelButton = page.locator("//button[@id='cancel']");
    this.finishButton = page.locator("//button[@id='finish']");
  }


  async verifyProductAndPrice(){
    await expect(this.sauceLabsBoltTShirt).toBeVisible();
    console.log("\n Sauce Labs Bolt T Shirt avaialble");
    await expect(this.sauceLabsBoltTShirtPrice).toBeVisible();
    console.log("Sauce Labs Bolt T Shirt Price Available");
    await expect(this.sauceLabsBoltTShirtQuantity).toBeVisible();
    console.log("Sauce Labs Bolt T Shirt Quantity Avaialble")
    await expect(this.sauceLabsFleeceacket).toBeVisible();
    console.log("Sauce Labs Fleece Jacket Avaialbe");
    await expect(this.sauceLabsFleeceacketPrice).toBeVisible();
    console.log("Sauce Labs Fleece Jacket Price Available");
    await expect(this.sauceLabsFleeceacketQuantity).toBeVisible();
    console.log("Sauce Labs Fleece Jacket Quantiy Available");
    await expect(this.paymentInformation).toBeVisible();
    console.log("Payment Infomration Avialable");
    await expect(this.shippingInfomration).toBeVisible();
    console.log("Shipping Information Avaialble");
    await expect(this.priceTotoal).toBeVisible();
    console.log("Total Price Is Available\n");
  }
  async verifyAvailabilityOfButtonsAndLinks() {
    await expect(this.cartButton).toBeVisible();
    console.log("\nCart Button is Visible");
    await expect(this.sideNavButton).toBeVisible();
    console.log("Side Nav Button is Visible");
    await expect(this.sauceLabsBoltTShirt).toBeVisible();
    console.log("Sauce Labs Bolt T Shirt Link is avaialble");
    await expect(this.sauceLabsFleeceacket).toBeVisible();
    console.log("Sauce Labs Fleece Jacket Link Avaialbe");
    await expect(this.cancelButton).toBeVisible();
    console.log("Purchase Cancel Button is Avaialble");
    await expect(this.finishButton).toBeVisible();
    console.log("Purchase Finsh Button is Avaialable \n");

  }

  async clickOnCancelButton(){
    await this.cancelButton.click();
    console.log("Click on Cancel Button");
  }

  async clicOnFinshButton(){
    await this.finishButton.click();
    console.log("Checkout Finish Confirmed")
  }
}

module.exports = { CheckoutOverviewPage };
