import { TestScript } from 'https://cdn.testspace.com/script/latest/testspace.script.mjs';

const test = new TestScript();

test.describe('Magento Demo Site Tests', () => {
    let driver;

    test.beforeAll(async () => {
        driver = await test.newDriver('chrome');
        await driver.maximizeWindow();
    });

    test.afterAll(async () => {
        await driver.quit();
    });

    test.it('should be able to login', async () => {
        await driver.navigate('https://magento.softwaretestingboard.com/');
        await driver.click('linkText=Log In');
        await driver.type('id=email', 'testuser@example.com');
        await driver.type('id=pass', 'testpassword');
        await driver.click('id=send2');
        const pageTitle = await driver.getTitle();
        test.expect(pageTitle).toContain('My Account');
    });

    test.it('should be able to search for products', async () => {
        await driver.navigate('https://magento.softwaretestingboard.com/');
        await driver.type('name=q', 'shirt');
        await driver.click('css=button[type="submit"]');
        const pageTitle = await driver.getTitle();
        test.expect(pageTitle).toContain("Search results for: 'shirt'");
    });
});

test.run();
