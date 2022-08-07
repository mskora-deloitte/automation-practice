/// <reference types="cypress" />
import { describe } from "mocha";
import { CheckoutPage } from "../page_objects/checkout-page";
import {MainPage} from "../page_objects/main-page";
import { SignInPage } from "../page_objects/sign-in-page";
import  { users }  from "../../../fixtures/user.json";
import  { products }  from "../../../fixtures/products.json";

context('e-shop', function() {

  describe("tests", function() {
    beforeEach(() => {    
      MainPage.openAutomationPracticePage();
    })

    users.forEach((user) => {

      it.skip('should sign in to ' + user.name + ' account', function() {
        MainPage.clickSignIn();
        SignInPage.typeEmail(user.email);
        SignInPage.typePassword(user.password);
        SignInPage.clickSignIn();
        SignInPage.checkIfLoggedInCorrectly(user.name);
      });
    });

    it('should add products to cart', () => {
      // const firstProductIndex = 2;
      // const secondProductIndex = 1;
      const firstProductName = "Blouse";
      const secondProductName = "Faded Short Sleeve T-shirts"
      // const firstProductPrice = MainPage.getItemPrice(firstProductIndex);
      const firstProductPrice = MainPage.getItemPrice(firstProductName);
      // MainPage.addItemToCart(firstProductIndex);
      MainPage.addItemToCart(firstProductName);
      // const secondProductPrice = MainPage.getItemPrice(secondProductIndex);
      const secondProductPrice = MainPage.getItemPrice(secondProductName);
      // MainPage.addItemToCart(secondProductIndex);
      MainPage.addItemToCart(secondProductName);
      MainPage.proceedToCheckout();
      CheckoutPage.assertItemPrice(firstProductName, firstProductPrice);
      CheckoutPage.assertItemPrice(secondProductName, secondProductPrice);
      let totalPrice = Number(firstProductPrice.substring(1)) + Number(secondProductPrice.substring(1));
      totalPrice = "$" + totalPrice.toFixed(2);
      CheckoutPage.assertTotalPrice(totalPrice);
    });

    it.skip('should add products from json to cart', () => {
      let prices = [];
      prices = MainPage.addProductsToCart(products);
      MainPage.proceedToCheckout();
      let totalPrice = 0;
      for(let i = 0; i < prices.length; i++) {
        CheckoutPage.assertItemPrice(i + 1, prices[i]);
        totalPrice += Number(prices[i].substring(1));
      }
      totalPrice = "$" + totalPrice.toFixed(2);
      CheckoutPage.assertTotalPrice(totalPrice);
    });
  });
})