import { test, expect } from '@playwright/test';
import { RestaurantMenuIframe } from "../pages/restaurant-page";

test.describe('Assessing Iframe Options', () => {
  let frame:RestaurantMenuIframe;
  
  test.beforeEach(async ({ page }) => {
    frame = new RestaurantMenuIframe(page);
    await page.goto('https://elfsight.com/restaurant-menu-widget/iframe/');
  });

  test('Foods Menu', async () => {;
    await frame.scrollToIframe();
    await frame.foodMenuIfrmae();
  });
  test('Specialty Menu', async () => {
    await frame.scrollToIframe();
    await frame.specialtyMenuIframe();
  });
});