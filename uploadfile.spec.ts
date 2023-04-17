import { test, expect } from '@playwright/test';

test('Upload files', async ({ page }) => {
  await page.goto('http://tutorialsninja.com/demo/index.php?route=product/product&path=25_28&product_id=42');
  // Start waiting for file chooser before clicking. Note no await.
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByText('Upload file').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('avadhpayment.pdf');
  

});

   import { defineConfig } from '@playwright/test';
   export default defineConfig({
  use: {
    video: {
      mode: 'on-first-retry', 
      size: { width: 640, height: 480 }
    }
  },
});


