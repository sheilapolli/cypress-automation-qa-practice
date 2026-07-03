class LoginPage {

    // Navigates to the login page URL
    visit() {
        cy.visit('/login'); 
    }

    usernameInput() {
        return cy.get('[name="emailAddress"]');
    }

    passwordInput() {
        return cy.get('[name="password"]');
    }

    submitButton() {
        return cy.get('#submitLoginBtn');
    }

    validLoginElement() {
        return cy.get('#logout');
    }

    invalidLoginElement() {
        return cy.get('#message');
    }

     validLogoutElement() {
        return cy.get('#loginSection > h2');
    }
    
    login(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.submitButton().click();
    }

    submitEmptyForm() {
        this.submitButton().click();
    }

    verifyValidLogin(expectedText) {
        this.validLoginElement().should('contain', expectedText);
    }

    verifyInvalidLogin(expectedText) {
        this.invalidLoginElement().should('contain', expectedText);
    }

    verifyValidLogout(expectedText) {
        this.validLogoutElement().should('contain', expectedText);
    }
}

export default new LoginPage();