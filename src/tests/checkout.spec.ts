import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';

test.describe('Checkout — SAU-11, SAU-32', () => {

  // TC-007 — SAU-11
  test('TC-007 — should complete full checkout process',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(7);
    qase.title('Complete full checkout process');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();

    await expect(cartPage.getCartItems()).toHaveCount(1);

    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingInfo('Test', 'User', '12345');
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    await expect(checkoutPage.getConfirmationTitle())
      .toHaveText('Thank you for your order!');
  });

  // TC-013 — SAU-32
  test('TC-013 — should land on checkout-complete page after finishing order',
    async ({ loggedInPage, cartPage, checkoutPage, page }) => {
    qase.id(13);
    qase.title('Land on checkout-complete page after finishing order');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingInfo('Test', 'User', '12345');
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    await expect(page).toHaveURL(/checkout-complete/);
  });

});

test.describe('Checkout — SAU-37', () => {

  // TC-024 — SAU-37
  test('TC-024 — should show error when first name is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(24);
    qase.title('Show error when first name is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingInfo('', 'User', '12345');
    await checkoutPage.clickContinue();

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: First Name is required');
  });

  // TC-025 — SAU-37
  test('TC-025 — should show error when last name is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(25);
    qase.title('Show error when last name is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingInfo('Test', '', '12345');
    await checkoutPage.clickContinue();

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: Last Name is required');
  });

  // TC-026 — SAU-37
  test('TC-026 — should show error when postal code is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(26);
    qase.title('Show error when postal code is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillShippingInfo('Test', 'User', '');
    await checkoutPage.clickContinue();

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: Postal Code is required');
  });

  // TC-027 — SAU-37
  test('TC-027 — should cancel checkout and return to cart',
    async ({ loggedInPage, cartPage, checkoutPage, page }) => {
    qase.id(27);
    qase.title('Cancel checkout and return to cart');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.clickCancel();

    await expect(page).toHaveURL(/cart\.html/);
  });

});

test.describe('Checkout — SAU-40', () => {

  // TC-035 — SAU-40
  test('TC-035 — should display error when first name is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(35);
    qase.title('Display error when first name is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.submitCheckoutForm('', 'User', '12345');

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: First Name is required');
  });

  // TC-036 — SAU-40
  test('TC-036 — should display error when last name is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(36);
    qase.title('Display error when last name is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.submitCheckoutForm('Test', '', '12345');

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: Last Name is required');
  });

  // TC-037 — SAU-40
  test('TC-037 — should display error when postal code is missing',
    async ({ loggedInPage, cartPage, checkoutPage }) => {
    qase.id(37);
    qase.title('Display error when postal code is missing');

    await loggedInPage.addFirstProductToCart();
    await loggedInPage.goToCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.submitCheckoutForm('Test', 'User', '');

    await expect(checkoutPage.getErrorMessage())
      .toHaveText('Error: Postal Code is required');
  });

});