import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  private readonly checkoutButton:       Locator;
  private readonly continueShoppingButton: Locator;
  private readonly cartItems:            Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton        = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.cartItems             = page.locator('[data-test="inventory-item"]');
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
    await this.takeScreenshot('07-checkout-started');
  }

  async removeFirstItem(): Promise<void> {
    await this.page
      .locator('[data-test^="remove-"]')
      .first()
      .click();
    await this.takeScreenshot('06b-item-removed-from-cart');
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
    await this.takeScreenshot('06c-continued-shopping');
  }

  getCartItems(): Locator {
    return this.cartItems;
  }

  getFirstItemName(): Locator {
    return this.cartItems.first().locator('[data-test="inventory-item-name"]');
  }

  getFirstItemPrice(): Locator {
    return this.cartItems.first().locator('.inventory_item_price');
  }
}