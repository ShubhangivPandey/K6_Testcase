import { test,chromium, expect } from '@playwright/test';
test.describe.parallel('Launch browser', ()=> {

test('Shpping hammer', async ({ }) => {
    const browser = await chromium.launch()

    const context = await browser.newContext();
    
    const page = await context.newPage()
  
    await page.goto('https://practicesoftwaretesting.com/#/');
  
    await page.getByRole('textbox').fill('Hammer');
  
    await page.locator('xpath=/html/body/app-root/div/app-overview/div[3]/div[1]/form[2]/div/button[2]').click();
  
    await page.locator('xpath=/html/body/app-root/div/app-overview/div[3]/div[2]/div[1]/a[1]/div[1]/img').click();
  
    await page.locator('xpath=/html/body/app-root/div/app-detail/div[1]/div[2]/div[1]/button[2]/i').click();
  
    await page.locator('xpath=/html/body/app-root/div/app-detail/div[1]/div[2]/div[2]/button[1]').click();

});
});