// pages/loginPage.js
const { expect } = require('@playwright/test');

class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='first-name']");
    this.firstNameField = page.locator("//input[@id='last-name']");
    this.lastNameField = page.locator("//input[@id='postal-code']");

    this.continueButton = page.locator("//input[@id='continue']");
    this.cartButton = page.locator("//a[@class='shopping_cart_link']");
    this.sideNavButton = page.locator("//button[@id='react-burger-menu-btn']");
  }

  async fillInformation(firstname, lastname, zipcode) {
    await this.usernameField.fill(firstname);
    await this.firstNameField.fill(lastname);
    await this.lastNameField.fill(zipcode);
    await this.continueButton.click();
  }


  async verifyAvailabilityOfButtonsAndLinks() {
    await expect(this.continueButton).toBeVisible();
    console.log("\n Continue Button is Visible");
    await expect(this.cartButton).toBeVisible();
    console.log("Cart Button is Visible");
    await expect(this.sideNavButton).toBeVisible();
    console.log("Side Nav Button is Visible")
  }
}

module.exports = { CheckoutInformationPage };
