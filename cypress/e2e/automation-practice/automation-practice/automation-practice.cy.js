/// <reference types="cypress" />
import { CheckoutPage } from "../page_objects/checkout-page";
import {MainPage} from "../page_objects/main-page"
import { MyAccountPage } from "../page_objects/my-account-page";
import { SignInPage } from "../page_objects/sign-in-page";
import { WomenPage } from "../page_objects/women-page";
// import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
  let loginData;
  let productsData;
  beforeEach(() => {    
    cy.fixture('user').then(user => {
      loginData = user;
    });
    cy.fixture('products').then(products => {
      productsData = products;
    })
    MainPage.openAutomationPracticePage();
  })

  it('should sign in to existing account', () => {
    MainPage.clickSignIn();
    SignInPage.typeEmail(loginData.email);
    SignInPage.typePassword(loginData.password);
    SignInPage.clickSignIn();
  });

  it('should add products to cart', () => {
    const firstProductIndex = 2;
    const secondProductIndex = 1;
    const firstProductPrice = MainPage.addItemToCart(firstProductIndex);
    const secondProductPrice = MainPage.addItemToCartAndProceedToCheckout(secondProductIndex);
    CheckoutPage.assertItemPrice(1, firstProductPrice);
    CheckoutPage.assertItemPrice(2, secondProductPrice);
    let totalPrice = Number(firstProductPrice.substring(1)) + Number(secondProductPrice.substring(1));
    totalPrice = "$" + totalPrice.toFixed(2);
    CheckoutPage.assertTotalPrice(totalPrice);
  });

  it('should add products from json to cart', () => {
    let prices = [];
    for (let i = 0; i < productsData.length; i++) {
      prices[i] = MainPage.addItemToCart(productsData[i].id);
    }
    MainPage.proceedToCheckout();
    let totalPrice = 0;
    for(let i = 0; i < prices.length; i++) {
      CheckoutPage.assertItemPrice(i + 1, prices[i]);
      totalPrice += Number(prices[i].substring(1));
    }
    totalPrice = "$" + totalPrice.toFixed(2);
    CheckoutPage.assertTotalPrice(totalPrice);
  });
})