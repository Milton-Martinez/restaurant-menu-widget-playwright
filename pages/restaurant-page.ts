import { type Locator, type FrameLocator, type Page, expect } from "@playwright/test";

export class RestaurantMenuIframe {
    
    readonly page:Page;
    readonly frame:FrameLocator;
    readonly menu:Locator;
    readonly iframeContainer:Locator;
    menuItems = [
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
        this.frame = page.frameLocator('iframe.application-demo-new-dashboard-iframe iframe iframe.Preview__Frame-sc-pnzhxw-0.ghxNdZ');
        this.iframeContainer = page.locator('.application-demo-new-dashboard-iframe-container');
        this.menu = page.locator('.ItemLayoutTwo__NameContainer-sc-1w7r2g7-3');
        
    }

    async scrollToIframe(){
        await this.iframeContainer.scrollIntoViewIfNeeded();
        await this.iframeContainer.click(); // necessary to activate the iframe
    }
    async menuIfrmae(){
        const data = await this.frame.frameLocator('iframe');
        const data2 = await data.frameLocator('iframe.Preview__Frame-sc-pnzhxw-0.ghxNdZ')


        
        // await this.page.waitForTimeout(5000);
        // const result = await data2.locator('.Name__NameComponent-sc-6egqc9-0.iVkdyv').evaluate( (e) => {
        //     e.map(item => item.textContent?.trim());
        // });
        // console.log(result);
    }

}