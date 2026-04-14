import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';

test.describe('Cart — SAU-33', () => {

  // TC-014 — SAU-33 (AC1)
  test('TC-014 — should remove product from inventory page and clear cart badge',
    async ({ loggedInPage }) => {
    qase.id(14);
    qase.title('Remove product from inventory page clears cart badge');

    await loggedInPage.addFirstProductToCart();
    await expect(loggedInPage.getCartBadge()).toHaveText('1');

    await loggedInPage.removeFirstProductFromCart();

    await expect(loggedInPage.getCartBadge()).not.toBeVisible();
  });

  // TC-015 — SAU-33 (AC2)
  test('TC-015 — should remove product from cart page and leave cart empty',
    async ({ loggedInPage, cartPage }) => {
    qase.id(15);
    qase.title('Remove product from cart page leaves cart empty');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();

    await expect(cartPage.getCartItems()).toHaveCount(1);

    await cartPage.removeFirstItem();

    await expect(cartPage.getCartItems()).toHaveCount(0);
  });

});

test.describe('Cart — SAU-36', () => {

  // TC-022 — SAU-36 (AC1)
  test('TC-022 — should display correct item name and price in cart',
    async ({ loggedInPage, cartPage }) => {
    qase.id(22);
    qase.title('Cart displays correct item name and price for added product');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();

    await expect(cartPage.getFirstItemName()).toHaveText('Sauce Labs Backpack');
    await expect(cartPage.getFirstItemPrice()).toHaveText('$29.99');
  });

  // TC-023 — SAU-36 (AC2)
  test('TC-023 — should navigate back to inventory page when continuing shopping',
    async ({ loggedInPage, cartPage, page }) => {
    qase.id(23);
    qase.title('Continue Shopping button navigates back to inventory page');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();

    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory\.html/);
  });

});
