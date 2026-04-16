import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailPage extends BasePage {

  private readonly productName:     Locator;
  private readonly productDesc:     Locator;
  private readonly productPrice:    Locator;
  private readonly productImage:    Locator;
  private readonly addToCartButton: Locator;
  private readonly removeButton:    Locator;
  private readonly backButton:      Locator;
  private readonly cartBadge:       Locator;

  constructor(page: Page) {
    super(page);
    this.productName     = page.locator('[data-test="inventory-item-name"]');
    this.productDesc     = page.locator('[data-test="inventory-item-desc"]');
    this.productPrice    = page.locator('.inventory_details_price');
    this.productImage    = page.locator('.inventory_details_img');
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
    this.removeButton    = page.locator('button:has-text("Remove")');
    this.backButton      = page.locator('[data-test="back-to-products"]');
    this.cartBadge       = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
    await this.takeScreenshot('02-added-to-cart');
  }

  async goBackToProducts(): Promise<void> {
    await this.backButton.click();
    await this.takeScreenshot('02-back-to-products');
  }

  getProductName(): Locator     { return this.productName; }
  getProductDesc(): Locator     { return this.productDesc; }
  getProductPrice(): Locator    { return this.productPrice; }
  getProductImage(): Locator    { return this.productImage; }
  getAddToCartButton(): Locator { return this.addToCartButton; }
  getRemoveButton(): Locator    { return this.removeButton; }
  getCartBadge(): Locator       { return this.cartBadge; }
}
