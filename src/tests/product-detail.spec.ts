import { test, expect } from '../fixtures/test-fixtures';
import { qase } from 'playwright-qase-reporter';
import { USERS } from '../utils/test-data';

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

test.describe('Product Detail Page — SAU-59', () => {

  // TC-047 — SAU-59
  test('TC-047 — problem_user inventory image should match product detail image for same product',
    async ({ loginPage, inventoryPage, productDetailPage, page }) => {
      test.fail(); // SAU-59: inventory images are all the same (backpack), so they mismatch the detail page
      qase.id(47);
      qase.title('problem_user inventory image src matches product detail page image src');

      await loginPage.loginWith(USERS.problem.username, USERS.problem.password);
      await page.waitForURL('**/inventory.html');

      // Capture inventory image src for second product (Sauce Labs Bike Light)
      const inventorySrcs = await inventoryPage.getProductImageSrcs();
      const inventoryImageSrc = inventorySrcs[1];

      // Navigate to that same product's detail page
      await inventoryPage.goToNthProduct(1);

      const detailImageSrc = await productDetailPage.getProductImage().getAttribute('src');
      expect(inventoryImageSrc).toBe(detailImageSrc);
    });

});
