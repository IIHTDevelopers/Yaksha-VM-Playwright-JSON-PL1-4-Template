import { Locator, Page } from "@playwright/test";
const data = JSON.parse(JSON.stringify(require("../Data/login.json")));

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private adminButton: Locator;
  private logOut: Locator;

  constructor(page: Page) {

    this.page = page;
    this.usernameInput = page.locator("");
    this.passwordInput = page.locator("");
    this.loginButton = page.locator("");
    this.loginErrorMessage = page.locator(``);
    this.adminButton = page.locator('');
    this.logOut = page.locator("");
  }

  async performLogin() {
  }

  /**
   * Logs the user out of the application.
   *
   * Steps:
   * 1. Clicks on the admin/profile button to open the dropdown.
   * 2. Clicks on the logout option to initiate logout.
   * 3. Waits for the URL to confirm redirection to the login page.
   * 4. Returns the current URL after logout for validation purposes.
   *
   * @returns {Promise<string>} - The URL after successful logout
   */

  async performLogOut(): Promise<string> {
    return "";
  }
}

module.exports = { LoginPage };
