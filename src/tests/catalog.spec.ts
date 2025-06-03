import { test, expect } from '@playwright/test';

test.describe('Favoritmarkera bok i katalogfliken', () => {
  test('användare kan favoritmarkera och avmarkera en bok i katalogfliken', async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

    const bookTitle = 'Jag trodde det var tisdag';
    const book = page.getByText(bookTitle);
    await expect(book).toBeVisible();

    const heart = page.getByTestId(`star-${bookTitle}`);

    //favoritmarkera bok
    await heart.click();
    await expect(heart).toHaveClass(/selected/);

    //avmarkera bok
    await heart.click();
    await expect(heart).not.toHaveClass(/selected/);
  });
});
