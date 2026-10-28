import BasePage from "../BasePage";
import MyaccountPage from "../my-account/MyAccountPage";

/**
 * login page -page object
 * url: /login
 */

export default class LoginPage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[normalize-space(text())='Login']");
  }
  async inputUsername(username: string): Promise<void> {
    await this.fill("#username", username);
  }

  async inputPassword(password: string): Promise<void> {
    await this.fill("#password", password);
  }

  async clickLoginButton(): Promise<MyaccountPage> {
    await this.click("button[name='login']");
    return new MyaccountPage(this.page);
  }
}
