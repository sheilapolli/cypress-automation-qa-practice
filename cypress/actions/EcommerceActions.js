import EcommercePage from '../pages/EcommercePage';

class EcommerceActions {

    /**
     * Fluxo completo da compra.
     */
    adicionarProdutosEPreencherCompra(dados) {

        EcommercePage.adicionarItensAoCarrinho();

        EcommercePage.avancarParaCheckout();

        cy.get('form').should('be.visible');

        EcommercePage.fillShippingDetails(
            dados.phone,
            dados.street,
            dados.city,
            dados.country
        );

        EcommercePage.submitOrder();
    }

    /**
     * Valida que a compra foi realizada com sucesso.
     */
    verificarCompraComSucesso(mensagemEsperada) {

        cy.get('body', { timeout: 6000 })
            .should('contain.text', mensagemEsperada);

    }

    /**
     * Valida que o navegador bloqueou o envio de um campo obrigatório
     */
    verificarCampoObrigatorioBarrouNavegador(seletorCampo) {

        cy.get(seletorCampo).then(($campo) => {

            const elemento = $campo[0];

            expect(elemento.validity.valueMissing).to.be.true;
            expect(elemento.checkValidity()).to.be.false;
            expect(elemento.validationMessage).to.not.be.empty;

        });

        cy.contains('Congrats!').should('not.exist');
    }

    /**
     * Validação específica para o campo Country.
     */
    verificarCountryObrigatorio() {

        cy.get('#countries_dropdown_menu')
            .should('exist')
            .and('have.value', 'Select a country...');

        cy.contains('Congrats!').should('not.exist');
    }

}

export default new EcommerceActions();