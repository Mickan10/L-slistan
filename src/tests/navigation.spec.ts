import { test, expect } from '@playwright/test';

test.describe('Användaren kan välja i flikmenyn', () => {
  test('användaren kan navigera till olika sidor', async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

    const addBooksBtn = page.getByRole('button', { name: 'Lägg till bok' });
    const myBooksBtn = page.getByRole('button', { name: 'Mina böcker' });
    const catalogBtn = page.getByRole('button', { name: 'Katalog' });

    await addBooksBtn.click();
    await expect(addBooksBtn).toBeDisabled();
    await expect(page.getByText('Välkommen!')).toBeVisible();

    await myBooksBtn.click();
    await expect(myBooksBtn).toBeDisabled(); 
    await expect(page.getByText('Välkommen!')).toBeVisible();

    await catalogBtn.click();
    await expect(catalogBtn).toBeDisabled(); 
    await expect(page.getByText('Välkommen!')).toBeVisible();
  });
});

