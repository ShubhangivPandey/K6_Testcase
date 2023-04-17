import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S-2079686760%3A1679407306802515&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ifkv=AWnogHfyEwwWI8bH1TPNso4E4pwcn88g12zR-CRzw06KKFr-y2G4AA0gYv-XVmEuG3pXfdg4QywRcw&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin');

});

test('get started link', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S-2079686760%3A1679407306802515&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ifkv=AWnogHfyEwwWI8bH1TPNso4E4pwcn88g12zR-CRzw06KKFr-y2G4AA0gYv-XVmEuG3pXfdg4QywRcw&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  await page.goto('https://support.google.com/chrome/answer/6130773?hl=en');

});