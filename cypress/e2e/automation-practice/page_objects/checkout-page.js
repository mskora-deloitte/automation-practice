export class CheckoutPage {

    // static assertItemPrice(itemIndex, assertPrice) {
    //     cy.get(`tbody > :nth-child(${itemIndex}) .cart_unit > .price > .price`)
    //         .invoke('text')    
    //         .should('eq', assertPrice);
    //     // let price = Cypress.$(`tbody > :nth-child(${itemIndex}) .cart_unit > .price > .price`);
    // };
    static assertItemPrice(itemName, assertPrice) {
        cy.get(`tbody > :nth-child(${itemName}) .cart_unit > .price > .price`)
            .invoke('text')    
            .should('eq', assertPrice);
        // let price = Cypress.$(`tbody > :nth-child(${itemIndex}) .cart_unit > .price > .price`);
    };
    
    static assertTotalPrice(assertPrice) {
      cy.get('#total_product')
        .invoke('text')
        .should('eq', assertPrice);
    };
}