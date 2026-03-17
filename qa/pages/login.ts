import { Locator, Page } from "playwright/test";
import { SetPageExtenstions } from "../extensions/SetPageExtensions.ts";
import { ClickPageExtensions } from "../extensions/ClickPageExtensions.ts";

export default class Login{
    usernameTextbox: Locator;
    passwordTextbox: Locator;
    loginButton: Locator;
    setpageExtension: SetPageExtenstions;
    clickPageExtensions: ClickPageExtensions;
    _page: any
    
    constructor(page: Page){
        this._page = page;
        //objects
        this.setpageExtension = new SetPageExtenstions(page);
        this.clickPageExtensions = new ClickPageExtensions(page);


        //page locators
        this.usernameTextbox = page.locator("#username");
        this.passwordTextbox = page.locator("#password");
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }

    async LoginToApplication(){
        await this.setpageExtension.SetTextBoxValueByID(this.usernameTextbox, "sathish");
        await this.setpageExtension.SetTextBoxValueByID(this.passwordTextbox, "Test@123");
        await this._page.waitForTimeout(3000);
        await this.clickPageExtensions.ClickButtonByName(this.loginButton);
    }
}