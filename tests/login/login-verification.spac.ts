import { test, expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../../actions/navigation";

test(
  "Verify a user can login to the application with valid credentials",
  { tag: ["@smoke", "@regression", "@login"] },
  async ({ page }) => {
    //1. Go to the statt page
    await test.step("Go to the start page", async () => {
      await goToStartPage(page);
    });
    //2. Navigate to the login page
    const loginPage = await test.step("Navigate to the login page", async () =>
      goToLoginPage(page));
    //3. Wait until the login page is loaded
    await test.step("Wait until the login page is loaded", async () => {
      await loginPage.waitUntilPageIsLoaded();
    });
    //4. Input username
    await test.step("Input username", async () => {
      await loginPage.inputUsername("students");
    });
    //5. Input password
    await test.step("Input password", async () => {
      await loginPage.inputPassword("Default1!");
    });

    const myAccountPage = await test.step("Click the login button", async () =>
      loginPage.clickLoginButton());

    await test.step("Wait until the My Account page is loaded", async () => {
      await myAccountPage.waitUntilPageIsLoaded();
    });

    const logOutText = await test.step("Get the Log out text", async () =>
      myAccountPage.getLogOutText());

    await test.step("Verify login was successful", async () => {
      expect(logOutText).toBe("Log out");
    });
  },
);
