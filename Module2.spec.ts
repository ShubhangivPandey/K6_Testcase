import { test,chromium, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.locator('xpath=/html/body/div[1]/main/div[3]/div/div[2]/div[1]/a/img').click();
  await page.locator('xpath=/html/body/div[1]/main/div[3]/div[1]/div[3]/ol/li[1]/div/a/span/span/img').click();
  await page.click('//*[@id="option-label-size-143-item-171"]');
  await page.click('//*[@id="option-label-color-93-item-57"]');
  await page.locator("xpath=/html/body/div[1]/main/div[2]/div/div[1]/div[5]/div/a[1]/span").click();
  
});