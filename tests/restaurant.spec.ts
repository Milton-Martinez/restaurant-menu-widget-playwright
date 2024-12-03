import { test, expect } from '@playwright/test';
import { RestaurantMenuIframe } from "../pages/restaurant-page";

test.describe('Assessing Iframe Options', () => {
  let frame:RestaurantMenuIframe;
  
  test.beforeEach(async ({ page }) => {
    frame = new RestaurantMenuIframe(page);
    await page.goto('https://elfsight.com/restaurant-menu-widget/iframe/');
  });

  test('Pizza Menu', async () => {
    console.log('pasamos aqui 1');
    await frame.scrollToIframe();
    await frame.menuIfrmae();
  });
});