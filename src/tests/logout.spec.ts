import { test, expect } from '../fixtures/test-fixtures';
import { URLS } from '../utils/test-data';
import { qase } from 'playwright-qase-reporter';

test.describe('Logout — SAU-35', () => {

  // TC-020 — SAU-35
  test('TC-020 — should redirect to login page after logout',
    async ({ loggedInPage, page }) => {
      qase.id(20);
      qase.title('User is redirected to login page after logout');

      await loggedInPage.logout();

      await expect(page).toHaveURL(URLS.login);
    });

  // TC-021 — SAU-35
  test('TC-021 — should not be able to navigate back to inventory after logout',
    async ({ loggedInPage, page }) => {
      qase.id(21);
      qase.title('User cannot access inventory page after logout');

      await loggedInPage.logout();

      await page.goto(URLS.inventory);

      await expect(page).toHaveURL(URLS.login);
    });

});
