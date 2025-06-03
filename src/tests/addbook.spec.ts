import { test, expect } from '@playwright/test';

test.describe('Användaren ska kunna lägga till böcker till katalogen', () => {
  test('lägga till böcker genom att fylla i titel och författare och att boken syns i katalogen', async ({ page }) => {

    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

    const addBookTabBtn = page.getByRole('button', { name: 'Lägg till bok' });
    await addBookTabBtn.click();

    const inputTitle = page.getByTestId('add-input-title');
    const inputAuthor = page.getByTestId('add-input-author');
    const addBookButton = page.getByRole('button', { name: 'Lägg till ny bok' });

    const bookTitle = 'Jag trodde det var måndag';
    const bookAuthor = 'Anna Svensson';

    await expect(inputTitle).toBeVisible();
    await expect(inputAuthor).toBeVisible();

    await inputTitle.fill(bookTitle);
    await inputAuthor.fill(bookAuthor);

    await expect(addBookButton).toBeEnabled();
    await addBookButton.click();

    const katalogTabBtn = page.getByRole('button', { name: 'Katalog' });
    await katalogTabBtn.click();

    const addedBookTitle = page.getByText(bookTitle);
    const addedBookAuthor = page.getByText(bookAuthor);

    await expect(addedBookTitle).toBeVisible();
    await expect(addedBookAuthor).toBeVisible();

  });
});
