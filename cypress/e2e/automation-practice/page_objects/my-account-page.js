export class MyAccountPage {
    static clickCategory(name) {
        cy.get('#block_top_menu').contains(name).click();
    }
}