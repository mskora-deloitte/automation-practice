/// <reference types="cypress" />
import {MainPage} from "../page_objects/main-page"
// import {WomenPage} from "../page_objects/women-page"
// import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
  beforeEach(() => {    
    MainPage.openAutomationPracticePage();
  })

  describe('menu bar', () => {

    it('should open category: Women', () => {
      MainPage.clickCategory('Women');
      // WomenPage.checkIfWomenCategoryisOpen();      
    })

    it('should open cart page', () => {
      MainPage.clickShoppingCart();
      // ShoppingCart.checkIfShoppingCartisOpen();        
    })
  })
})