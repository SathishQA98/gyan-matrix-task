import { Locator, Page } from "playwright/test";
import { SetPageExtenstions } from "../extensions/SetPageExtensions.ts";
import { ClickPageExtensions } from "../extensions/ClickPageExtensions.ts";
var random = require('random-name');

export default class Project{

    //object declaration
    setpageExtension: SetPageExtenstions;
    clickPageExtensions: ClickPageExtensions;
    _page: any

    projectNavLink: Locator;
    addNewProjectLink: Locator;
    projectTitle: Locator;
    createButton: Locator;
    
    constructor(page: Page){
        this._page = page;
        //objects
        this.setpageExtension = new SetPageExtenstions(page);
        this.clickPageExtensions = new ClickPageExtensions(page);

        this.projectNavLink = page.getByRole('link', {name: ' Projects'});
        this.addNewProjectLink = page.getByRole('link', {name: 'New project'});
        this.projectTitle = page.getByPlaceholder("The project's title goes here…");
        this.createButton = page.getByRole('button', {name: 'Create'});

    }

    async CreateProject(){
        await this.clickPageExtensions.ClickLinkByName(this.projectNavLink);
        await this.clickPageExtensions.ClickLinkByName(this.addNewProjectLink);
        await this.setpageExtension.SetTextBoxValueByPlaceholderText(this.projectTitle, `${random.first()} Project`);
        await this.clickPageExtensions.ClickButtonByName(this.createButton);
    }
}