/// <reference types="cypress" />
import { CheckoutPage } from "../page_objects/checkout-page";
import {MainPage} from "../page_objects/main-page"
import { MyAccountPage } from "../page_objects/my-account-page";
import { SignInPage } from "../page_objects/sign-in-page";
import { WomenPage } from "../page_objects/women-page";
// import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
  beforeEach(() => {    
    MainPage.openAutomationPracticePage();
  })

  // describe('menu bar', () => {

  //   it('should open category: Women', () => {
  //     MainPage.clickCategory('Women');
  //     // WomenPage.checkIfWomenCategoryisOpen();      
  //   })

  //   it('should open cart page', () => {
  //     MainPage.clickShoppingCart();
  //     // ShoppingCart.checkIfShoppingCartisOpen();        
  //   })

  // })
  
  // it('should sign in to existing account', () => {
  //   MainPage.clickSignIn();
  //   SignInPage.typeEmail("mskora@deloittece.com");
  //   SignInPage.typePassword("Cypress");
  //   SignInPage.clickSignIn();
  // });

  it('should add products to cart', () => {
    const firstProductIndex = 2;
    const secondProductIndex = 1;
    const firstProductPrice = MainPage.addItemToCart(firstProductIndex);
    const secondProductPrice = MainPage.addItemToCartAndProceedToCheckout(secondProductIndex);
    // console.log('------------------------------------------------------------');
    // console.log(firstProductPrice);
    // console.log('------------------------------------------------------------');
    // console.log(secondProductPrice);
    // cy.should(CheckoutPage.getItemPrice(firstProductIndex), firstProductPrice);
    // cy.should(CheckoutPage.getItemPrice(secondProductIndex), secondProductPrice);
    CheckoutPage.assertItemPrice(1, firstProductPrice);
    CheckoutPage.assertItemPrice(2, secondProductPrice);
    let totalPrice = Number(firstProductPrice.substring(1)) + Number(secondProductPrice.substring(1));
    totalPrice = "$" + totalPrice.toFixed(2);
    CheckoutPage.assertTotalPrice(totalPrice);
  });
})