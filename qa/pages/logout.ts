import { Locator, Page } from "playwright/test";
import { SetPageExtenstions } from "../extensions/SetPageExtensions.ts";
import { ClickPageExtensions } from "../extensions/ClickPageExtensions.ts";

export default class Logout{
    
    setpageExtension: SetPageExtenstions;
    clickPageExtensions: ClickPageExtensions;
    _page: any;

    userprofileDropdown: Locator;
    logoutButton: Locator
    
    constructor(page: Page){
        this._page = page;
        //objects
        this.setpageExtension = new SetPageExtenstions(page);
        this.clickPageExtensions = new ClickPageExtensions(page);

        this.userprofileDropdown = page.locator("//button[contains(@class,'username-dropdown')]");
        this.logoutButton = page.getByRole('button', {name: 'Logout'});
  
    }

    async LogoutFromApplication(){
        await this.clickPageExtensions.ClickButtonByLocator(this.userprofileDropdown);
        await this.clickPageExtensions.ClickButtonByName(this.logoutButton);
        await this._page.waitForTimeout(5000);
    }
}