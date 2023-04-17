import { test,chromium, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://demo.t3-framework.org/joomla30/index.php/en/joomla-pages/sample-page-2/login-page');
  await page.fill('//*[@id="username"]',"pandeyshubhangi91@gmail.com");
  await page.fill('//*[@id="password"]','Shubhangi@21');
  await page.locator('xpath=/html/body/div[2]/div/div/div[1]/div[2]/div[1]/form/fieldset/div[4]/div/button').click();

});