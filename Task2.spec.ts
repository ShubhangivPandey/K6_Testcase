import { test,chromium, expect } from '@playwright/test';
test.describe.parallel('Launch browser', ()=> {

test('Shpping hammer', async ({ }) => {
    const browser = await chromium.launch()

    const context = await browser.newContext();
    
    const page = await context.newPage()
  
    await page.goto('https://practicesoftwaretesting.com/#/');
    
    await page.locator("xpath=/html/body/app-root/app-header/nav/div/div/ul/li[5]/a/span").click();

    await page.getByRole('button').click();

    

});
});