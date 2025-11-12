import { Given, Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/custom-world";


Given("I am on the saucedemo login page", async function(this: ICustomWorld) {
    await this.page?.goto("https://www.saucedemo.com/");
});

Then('I should be redirected to the inventory page', async function(this: ICustomWorld) {
  await this.page?.waitForURL("https://www.saucedemo.com/inventory.html");
});

When('I click the login button', async function(this: ICustomWorld) {
  await this.page?.click('#login-button');
});

When('I enter valid username and password {string} {string}', async function(this: ICustomWorld, s: string, u: string) {
  await this.page?.fill('#user-name', s);
  await this.page?.fill('#password', u);
});

When('I enter invalid username and password {string} {string}', async function(this: ICustomWorld, s: string, u: string) {
  await this.page?.fill('#user-name', s);
  await this.page?.fill('#password', u);
});

Then('I should see an error message indicating invalid credentials', async function(this: ICustomWorld) {
  await this.page?.waitForSelector('[data-test="error"]');
});
