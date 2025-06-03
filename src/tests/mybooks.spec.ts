import { test, expect } from '@playwright/test';

test.describe('Användaren kan se böcker man lagt till från katalogen till mina böcker', () =>
{
  test('användarens favoritböcker läggs till i listan', async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

    const bookTitle = 'Jag trodde det var tisdag';
    await expect(page.getByTestId(`star-${bookTitle}`)).toBeVisible();

    const heart = page.getByTestId(`star-${bookTitle}`);
    await heart.click();

    await page.getByRole('button', { name: 'Mina böcker' }).click();
    await expect(page.getByText(bookTitle)).toBeVisible();

  });

});
