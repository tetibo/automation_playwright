import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Verify Combination Pliers product page', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  // Open homepage
  await homePage.open();

  // Click Combination Pliers
  await homePage.clickProduct('Combination Pliers');

  // Verify URL contains /product
  await expect(page).toHaveURL(/\/product/);

  // Verify product name
  await expect(productPage.productName).toHaveText('Combination Pliers');

  // Verify product price
  await expect(productPage.productPrice).toHaveText('14.15');

  // Verify Add to Cart button is visible
  await expect(productPage.addToCartButton).toBeVisible();

  // Verify Add to Favorites button is visible
  await expect(productPage.addToFavoritesButton).toBeVisible();
});