export class MainPage {   

  static openAutomationPracticePage() {
    cy.visit("http://automationpractice.com/index.php");
  }

  static clickCategory(name) {
    cy.get('#block_top_menu').contains(name).click();
  }

  static clickShoppingCart() {
    cy.get('.shopping_cart').contains("Cart").click();
  }

  static clickSignIn() {
    cy.get('.login').click();
  }

  static addItemToCart(itemIndex) {
    cy.get(`#homefeatured > :nth-child(${itemIndex})`).contains("Add to cart").click();
    let price = Cypress.$(`#homefeatured > :nth-child(${itemIndex}) .price`);
    cy.wait(3000)
    cy.contains("Continue shopping").click();
    return price[0].innerText.trim();
  }


  static addItemToCartAndProceedToCheckout(itemIndex) {
    cy.get(`#homefeatured > :nth-child(${itemIndex})`).contains("Add to cart").click();
    let price = Cypress.$(`#homefeatured > :nth-child(${itemIndex}) .price`);
    cy.contains("Proceed to checkout").click();
    return price[0].innerText.trim();
  }

  static proceedToCheckout() {
    cy.get('[title="View my shopping cart"]').click();
  }
}