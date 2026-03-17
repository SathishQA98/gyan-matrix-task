import assert from "assert";
import { Locator, Page } from "@playwright/test";

export class ClickPageExtensions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async Click(locator: Locator, timeout = 60000) {
    try {
      await locator.waitFor({ state: "visible", timeout });

      if (!(await locator.isEnabled())) {
        assert.fail("Element is visible but disabled");
      }

      await locator.click({ timeout });
    } catch (error) {
      throw new Error(
        `❌ Click failed.\nReason: ${(error as Error).message}`
      );
    }
  }

  async ClickButtonByName(buttonName: string | Locator, timeout = 60000) {

    let locator: Locator;

    if (typeof buttonName !== "string") {
      locator = buttonName;
    } 
    else {
      locator = this.page.getByRole("button", { name: buttonName });
    }
    await this.Click(locator, timeout);
  }

  async ClickButtonByLocator(selector: string | Locator, timeout = 60000) {
    const locator =
      typeof selector === "string"
        ? this.page.locator(selector)
        : selector;

    await this.Click(locator, timeout);
  }

  async ClickLinkByName(linkName: string | Locator, timeout = 60000) {

    let locator: Locator;

    if (typeof linkName !== "string") {
      locator = linkName;
    } 
    else {
      locator = this.page.getByRole('link', { name: linkName });
    }
    await this.Click(locator, timeout);
  }
}