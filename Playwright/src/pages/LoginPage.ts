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
 * 1. Waits briefly to ensure the page and UI elements are ready.
 * 2. Clicks on the admin/profile button to expand the dropdown menu.
 * 3. Selects the logout option to initiate the logout process.
 * 4. Waits for the URL to confirm redirection to the login page
 *    (`BaseUrl + "/web/index.php/auth/login"`).
 *
 * Note:
 * - `BaseUrl` is passed as the argument through the testmethod.
 */
  async performLogOut(BaseUrl: string) {
  }
}

module.exports = { LoginPage };
