import { test, expect } from '@playwright/test';

test('Should add item to cart', async({page})=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/');  
    await page.locator("span.title", {hasText: 'Mega Menu' }).hover()
    await page.locator("a[title=Desktop]").click();
    await page.locator("div.carousel-item.active > img[title='HTC Touch HD']").click()
    await page.locator("#container button[title='Add to Cart']").click();
    
  });