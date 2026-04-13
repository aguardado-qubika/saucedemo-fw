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