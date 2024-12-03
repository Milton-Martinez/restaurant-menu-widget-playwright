import { type Locator, type FrameLocator, type Page, expect } from "@playwright/test";

export class RestaurantMenuIframe {
    
    readonly page:Page;
    readonly frame:FrameLocator;
    subFrame:FrameLocator;
    menuFrame:FrameLocator;
    readonly menu:Locator;
    readonly iframeContainer:Locator;
    mainMenu = [
        'Pizza', 'Burgers', 'Snacks & Sides', 'Salads', 'Drinks'
    ];
    mainMenuItems = [
        'La Rossa',
        'Margherita',
        'Burrata',
        'Jersey Margherita',
        'Panna',
        'Bosco',
        'Pepperoni',
        'Guancia'
    ]
    
    constructor(page: Page) {
        this.page = page;
        this.frame = page.frameLocator('iframe.application-demo-new-dashboard-iframe');
        this.iframeContainer = page.locator('.application-demo-new-dashboard-iframe-container');
        this.menu = page.locator('.ItemLayoutTwo__NameContainer-sc-1w7r2g7-3');
    }

    async getSubFrame(){
        this.subFrame = await this.frame.frameLocator('iframe:nth-of-type(1)');
        return this.subFrame;
    }
    async getMenuFrame(){
        this.subFrame = await this.frame.frameLocator('iframe:nth-of-type(1)');
        this.menuFrame = await this.subFrame.frameLocator('iframe:nth-of-type(1)');
        return this.menuFrame;
    }

    async scrollToIframe(){
        await this.iframeContainer.scrollIntoViewIfNeeded();
        await this.iframeContainer.click(); // necessary to activate the iframe
    }
    async menuIfrmae(){
        const menuFrame = await this.getMenuFrame();
        await menuFrame.locator('.TabsControlItem__Name-sc-u0xhvn-0').nth(0).waitFor({ state:"attached", timeout:3000 });
        const menuOptions = await menuFrame.locator('.TabsControlItem__Name-sc-u0xhvn-0').allTextContents();
        expect(menuOptions).toEqual(this.mainMenu);
    }

}