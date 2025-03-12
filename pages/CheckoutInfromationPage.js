// pages/loginPage.js
const { expect } = require('@playwright/test');

class CheckoutInformationPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("//input[@id='user-name']");
    this.passwordField = page.locator("//input[@id='password']");

    this.loginButton = page.locator("//input[@id='login-button']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillInformation(firstname, lastname, zipcode) {
    await this.usernameField.fill(firstname);
    await this.passwordField.fill(lastname);
    await this.passwordField.fill(lastname);
    await this.loginButton.click();
  }

  async verifyAvailabilityOfButtonsAndLinks() {
    await expect(this.usernameField).toBeVisible();
  }
}

module.exports = { CheckoutInformationPage };
