import { Page } from "playwright";
export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitUnitlPageIsLoaded() {
    await this.page.waitForLoadState("domcontentloaded");
  }
  async nevigateTo(url: string) {
    await this.page.goto(url);
  }
  async click(selector: string) {
    await this.page.locator(selector).click();
  }
  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }
  async getText(selector: string): Promise<string> {
    const locator = this.page.locator(selector);
    const text = (await locator.innerText()).trim();
    return text;
  }
  async isVisible(selector: string): Promise<boolean> {
    return this.page.locator(selector).isVisible();
  }
  async waitForElement(selector: string): Promise<void> {
    await this.page.locator(selector).waitFor({ state: "visible" });
  }
}
