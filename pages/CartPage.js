// pages/loginPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    // this.usernameField = page.locator("//input[@id='user-name']");
    // this.passwordField = page.locator("//input[@id='password']");
    // this.loginButton = page.locator("//input[@id='login-button']");
  }


  async login(username, password) {
    // await this.usernameField.fill(username);
    // await this.passwordField.fill(password);
    // await this.loginButton.click();
  }

  async verifyLogin() {
    // await expect(this.page.locator('text=Home')).toBeVisible();
  }
}

module.exports = { CartPage };
