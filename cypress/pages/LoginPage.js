class LoginPage {

    //URL configurada em cypress.config.js
    get url() { return '/auth_ecommerce.html'; }
    navigate() {
        cy.visit(this.url);
        return this;
    }
    // Identifica o campo Email pelo atributo name
    usernameInput() {
        return cy.get('[name="emailAddress"]');
    }
    // Identifica o campo Password pelo atributo name
    passwordInput() {
        return cy.get('[name="password"]');
    }
    // Identifica o campo Submit pelo ID
    submitButton() {
        return cy.get('#submitLoginBtn');
    }
    // Elemento visível apenas após autenticação bem-sucedida
    validLoginElement() {
        return cy.get('#logout');
    }
    // Elemento genérico de mensagens. Pode exibir erros de credenciais ou validação
    invalidLoginElement() {
        return cy.get('#message');
    }
    // Valida o redirecionamento ou a tela de retorno após o logout bem-sucedido
     validLogoutElement() {
        return cy.get('#loginSection > h2');
    }
    // Agrupa o fluxo completo de autenticação para reutilização nos testes
    login(username, password) {
        this.usernameInput().type(username);
        this.passwordInput().type(password);
        this.submitButton().click();
    }
    // Força o envio sem dados para testar as validações de campos obrigatórios
    submitEmptyForm() {
        this.submitButton().click();
    }
    // Asserções do Cypress: aguardam implicitamente (timeout padrão) o texto aparecer
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