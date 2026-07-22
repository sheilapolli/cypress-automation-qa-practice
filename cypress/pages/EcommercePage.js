class EcommercePage {
    get primeiroProdutoCarrinho() { return cy.get(':nth-child(1) > .shop-item-details > .btn'); }
    get segundoProdutoCarrinho() { return cy.get(':nth-child(2) > .shop-item-details > .btn'); }
    get botaoProceedToCheckout() { return cy.get(':nth-child(1) > .btn-primary'); }
    
    get phoneInput() { return cy.get('[name="phone"]'); }
    get streetInput() { return cy.get('[name="street"]'); }
    get cityInput() { return cy.get('[name="city"]'); }
    get countrySelect() { return cy.get('[name="country"]'); }
    get submitOrderButton() { return cy.get('#submitOrderBtn'); }

    adicionarItensAoCarrinho() {
        this.primeiroProdutoCarrinho.click();
        this.segundoProdutoCarrinho.click();
        return this;
    }

    avancarParaCheckout() {
        this.botaoProceedToCheckout.click();
        return this;
    }

    fillShippingDetails(phone, street, city, country) {
        if (phone) this.phoneInput.clear({ force: true }).type(phone); else this.phoneInput.clear({ force: true });
        if (street) this.streetInput.clear({ force: true }).type(street); else this.streetInput.clear({ force: true });
        if (city) this.cityInput.clear({ force: true }).type(city); else this.cityInput.clear({ force: true });
        if (country) this.countrySelect.select(country); else this.countrySelect.select('Select a country...');
        return this;
    }

    submitOrder() {
        this.submitOrderButton.click();
    }
}
export default new EcommercePage();