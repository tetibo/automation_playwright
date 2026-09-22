import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly addToFavoritesButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productName = page.locator('[data-test="product-name"]');
    this.productPrice = page.locator('[data-test="unit-price"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.addToFavoritesButton = page.locator(
      '[data-test="add-to-favorites"]'
    );
  }
}