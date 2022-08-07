export class SignInPage {

  static typeEmail(email) {
    cy.get("#email").type(email);
  } 

  static typePassword(password) {
    cy.get("#passwd").type(password);
  } 
  
  static clickSignIn() {
    cy.get("#SubmitLogin").click();
  }

  static checkIfLoggedInCorrectly(name) {
    cy.get(".account span")
      .invoke("text")
      .should("eq", name);
  }
}