
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

  // static addItemToCart(itemIndex) {
  //   cy.get(`#homefeatured > :nth-child(${itemIndex})`).contains("Add to cart").click();
  //   cy.wait(6000);
  //   cy.contains("Continue shopping").click();
  // }
  static addItemToCart(itemName) {
    // cy.get(`.product-container`).contains(itemName).parents('.right-block').contains("Add to cart").click();
    cy.get(`a[title="${itemName}"]`).parents('.right-block').contains("Add to cart").click();
    cy.wait(6000);
    cy.contains("Continue shopping").click();
  }

  // static getItemPrice(itemIndex) {
  //   let price = Cypress.$(`#homefeatured > :nth-child(${itemIndex}) .price`);
  //   return price[0].innerText.trim();
  // }
  static getItemPrice(itemName) {
    let price = Cypress.$(`.product-name`);
    for (let i = 0; i < price.length; i++) {
      if (itemName === price.get(i).title) {
        price = Cypress.$(`#homefeatured > :nth-child(${i}) .price`);
        break;
      }
    }
    return price[0].innerText.trim();
  }

  static addItemToCartAndProceedToCheckout(itemIndex) {
    cy.get(`#homefeatured > :nth-child(${itemIndex})`).contains("Add to cart").click();
    let price = Cypress.$(`#homefeatured > :nth-child(${itemIndex}) .price`);
    cy.wait(6000);
    cy.contains("Proceed to checkout").click();
    return price[0].innerText.trim();
  }

  static proceedToCheckout() {
    cy.get('[title="View my shopping cart"]').click();
  }

  static addProductsToCart(products) {
    let prices = [];
    products.forEach((product) => {
      prices.push(MainPage.getItemPrice(product.id));
      MainPage.addItemToCart(product.id);
    });
    return prices;
  };
}