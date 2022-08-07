export class CheckoutPage {

    static assertItemPrice(itemName, assertPrice) {
        cy.get('.cart_item .product-name')
        .contains(itemName)
        .parents('.cart_item')
        .children('.cart_unit')
            .invoke('text')
            .invoke('trim')  
            .should('eq', assertPrice);
    };

    static assertProductsPrices(products, prices) {
        let totalPrice = 0;
        for(let i = 0; i < prices.length; i++) {
            CheckoutPage.assertItemPrice(products[i].name, prices[i]);
            totalPrice += Number(prices[i].substring(1));
        }
        totalPrice = "$" + totalPrice.toFixed(2);
        return totalPrice;
    }
    
    static assertTotalPrice(assertPrice) {
      cy.get('#total_product')
        .invoke('text')
        .should('eq', assertPrice);
    };
}