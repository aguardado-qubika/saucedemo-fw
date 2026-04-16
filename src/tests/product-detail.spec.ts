import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';

test.describe('Product Detail Page — SAU-56', () => {

  // TC-038 — SAU-56
  test('TC-038 — should navigate to product detail page from inventory',
    async ({ loggedInPage, page }) => {
      qase.id(38);
      qase.title('User can navigate to product detail page from inventory');

      await loggedInPage.goToFirstProduct();

      await expect(page).toHaveURL(/inventory-item\.html/);
    });

  // TC-039 — SAU-56
  test('TC-039 — should display product name, description, price, and image',
    async ({ loggedInPage, productDetailPage }) => {
      qase.id(39);
      qase.title('Product detail page displays name, description, price, and image');

      await loggedInPage.goToFirstProduct();

      await expect(productDetailPage.getProductName()).toBeVisible();
      await expect(productDetailPage.getProductName()).not.toBeEmpty();

      await expect(productDetailPage.getProductDesc()).toBeVisible();
      await expect(productDetailPage.getProductDesc()).not.toBeEmpty();

      await expect(productDetailPage.getProductPrice()).toBeVisible();
      await expect(productDetailPage.getProductPrice()).toHaveText(/^\$\d+\.\d{2}$/);

      await expect(productDetailPage.getProductImage()).toBeVisible();
    });

  // TC-040 — SAU-56
  test('TC-040 — should add product to cart from detail page',
    async ({ loggedInPage, productDetailPage }) => {
      qase.id(40);
      qase.title('User can add product to cart from the product detail page');

      await loggedInPage.goToFirstProduct();
      await productDetailPage.addToCart();

      await expect(productDetailPage.getCartBadge()).toHaveText('1');
      await expect(productDetailPage.getRemoveButton()).toBeVisible();
    });

  // TC-041 — SAU-56
  test('TC-041 — should navigate back to inventory from product detail page',
    async ({ loggedInPage, productDetailPage, page }) => {
      qase.id(41);
      qase.title('User can navigate back to inventory from the product detail page');

      await loggedInPage.goToFirstProduct();
      await productDetailPage.goBackToProducts();

      await expect(page).toHaveURL(/inventory\.html/);
    });

});
