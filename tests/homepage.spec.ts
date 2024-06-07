import { test, expect } from '@playwright/test';

test('Coming Soon Page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ScoopDash/);
  await expect(page.getByRole('heading', { name: 'ScoopDash' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Coming Soon!' })).toBeVisible();
});


test('counter for intrested people ', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Interested Peeps: 0' })).toBeVisible();
  

});
