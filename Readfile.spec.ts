const { chromium } = require('playwright');

describe('Test Suite', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should upload file, read data, and execute scripts in serial', async () => {
    // Upload file
    await page.goto('https://example.com');
    const fileInput = await page.$('input[type=file]');
    await fileInput.setInputFiles('path/to/file');

    // Read data from file
    const fileContents = await page.evaluate(() => {
      const fileInput = document.querySelector('input[type=file]');
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve(reader.result);
        };
      });
    });
    console.log(fileContents);

    // Execute scripts
    const scripts = ['script1', 'script2', 'script3'];
    const runScript = async (script) => {
      // Code for executing a single script
    };

    // Run scripts in serial
    for (const script of scripts) {
      await runScript(script);
    }
  });

  it('should upload file, read data, and execute scripts in parallel', async () => {
    // Upload file
    await page.goto('http://tutorialsninja.com/demo/index.php?route=product/product&path=25_28&product_id=42');
    const fileInput = await page.$('//*[@id="button-upload222"]');
    await fileInput.setInputFiles('avadhpayment.pdf');

    // Read data from file
    const fileContents = await page.evaluate(() => {
      const fileInput = document.querySelector('//*[@id="button-upload222"]');
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve(reader.result);
        };
      });
    });
    console.log(fileContents);

    // Execute scripts
    const scripts = ['script1', 'script2', 'script3'];
    const runScript = async (script) => {
      // Code for executing a single script
    };

    // Run scripts in parallel
    await Promise.all(scripts.map((script) => runScript(script)));
  });
});
