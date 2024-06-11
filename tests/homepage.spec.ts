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


test('should have a field to add emails ', async ({ page }) => {
  await page.goto('/');
  // Select the text box using its role or other suitable selector
  const textBox = page.getByRole('textbox', { name: /visitors email/i });

  await textBox.fill('aalap@simform.com');

  // Verify that the text box contains the value
  await expect(textBox).toHaveValue('aalap@simform.com');

  const submitButton = page.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toBeVisible();
  await submitButton.click();

  await expect(page.getByRole('heading', { name: 'Interested Peeps: 1' })).toBeVisible();
  await expect(textBox).toHaveValue('');

  await page.reload();
  await expect(page.getByRole('heading', { name: 'Interested Peeps: 1' })).toBeVisible();
  
});
