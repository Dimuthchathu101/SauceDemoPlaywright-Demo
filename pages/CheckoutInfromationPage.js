// pages/loginPage.js
const { expect } = require('@playwright/test');

class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='first-name']");
    this.firstNameField = page.locator("//input[@id='last-name']");
    this.lastNameField = page.locator("//input[@id='postal-code']");

    this.continueButton = page.locator("//input[@id='continue']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillInformation(firstname, lastname, zipcode) {
    await this.usernameField.fill(firstname);
    await this.firstNameField.fill(lastname);
    await this.lastNameField.fill(zipcode);
    await this.continueButton.click();
  }


  async verifyAvailabilityOfButtonsAndLinks() {
    await expect(this.usernameField).toBeVisible();
  }
}

module.exports = { CheckoutInformationPage };
