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

test.describe('Cart badge — SAU-57', () => {

  // TC-042 — SAU-57 (AC1)
  test('TC-042 — badge increments to 2 when two products are added',
    async ({ loggedInPage }) => {
    qase.id(42);
    qase.title('Cart badge shows 2 after adding two distinct products');

    await loggedInPage.addNthProductToCart(0);
    await loggedInPage.addNthProductToCart(1);

    await expect(loggedInPage.getCartBadge()).toHaveText('2');
  });

  // TC-043 — SAU-57 (AC2)
  test('TC-043 — badge increments to 3 when three products are added',
    async ({ loggedInPage }) => {
    qase.id(43);
    qase.title('Cart badge shows 3 after adding three distinct products');

    await loggedInPage.addNthProductToCart(0);
    await loggedInPage.addNthProductToCart(1);
    await loggedInPage.addNthProductToCart(2);

    await expect(loggedInPage.getCartBadge()).toHaveText('3');
  });

  // TC-044 — SAU-57 (AC3)
  test('TC-044 — badge decrements to 1 after removing one item from a 2-item cart',
    async ({ loggedInPage }) => {
    qase.id(44);
    qase.title('Cart badge decrements correctly when one of two items is removed');

    await loggedInPage.addNthProductToCart(0);
    await loggedInPage.addNthProductToCart(1);
    await expect(loggedInPage.getCartBadge()).toHaveText('2');

    await loggedInPage.removeFirstProductFromCart();

    await expect(loggedInPage.getCartBadge()).toHaveText('1');
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
