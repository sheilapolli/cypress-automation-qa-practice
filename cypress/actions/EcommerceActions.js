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
     * Compra realizada com sucesso.
     */
    verificarCompraComSucesso(mensagemEsperada) {

        cy.get('body', { timeout: 6000 })
            .should('contain.text', mensagemEsperada);

    }

    /**
     * Validação HTML5 para INPUTS obrigatórios.
     */
    verificarCampoObrigatorioBarrouNavegador(
        seletorCampo,
        mensagemDesejada = 'Preencha este campo'
    ) {

        cy.get(seletorCampo).then(($campo) => {

            const elemento = $campo[0];

            expect(elemento.validity.valueMissing).to.be.true;
            expect(elemento.validationMessage)
                .to.contain(mensagemDesejada);

        });

        cy.get('body')
            .should('not.contain', 'Congrats!');
    }

    /**
     * Validação específica para Country.
     */
    verificarCountryObrigatorio() {

        cy.get('#countries_dropdown_menu')
            .should('exist')
            .and('have.value', 'Select a country...');

        cy.get('body')
            .should('not.contain', 'Congrats!');
    }

}

export default new EcommerceActions();