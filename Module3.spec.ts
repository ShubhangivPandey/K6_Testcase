import { test,chromium, expect } from '@playwright/test';

test('creating acount', async ({ page }) => {
    
  await page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
  
  await page.getByRole('textbox').fill('Shubhangi');
  

});
