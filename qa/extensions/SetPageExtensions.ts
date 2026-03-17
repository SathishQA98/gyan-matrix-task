import { Locator, Page } from "@playwright/test";
import assert from "assert";

export class SetPageExtenstions {

  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private resolveLocator(selector: string | Locator): Locator {
    return typeof selector === "string"
      ? this.page.locator(selector)
      : selector;
  }

  //Set Textbox value by Placeholder
  async SetTextBoxValueByPlaceholderText(selector: string | Locator, inputValue: any) {
    const locator = this.resolveLocator(selector);

    await locator.waitFor({ state: "visible", timeout: 60000 });

    if (!(await locator.isEditable())) {
      assert.fail("Textbox is visible but not editable");
    }

    await locator.fill(inputValue);
  }

  //Set Textbox value by ID
  async SetTextBoxValueByID(selector: string | Locator, inputValue: any) {
    const locator = this.resolveLocator(selector);

    await locator.waitFor({ state: "visible", timeout: 60000 });
    await locator.fill(inputValue);
  }
}
