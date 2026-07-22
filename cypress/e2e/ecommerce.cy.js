import LoginPage from '../pages/LoginPage';
import EcommercePage from '../pages/EcommercePage';
import EcommerceActions from '../actions/EcommerceActions';

describe('E-commerce - Fluxo de Itens e Envio', () => {
    let loginData;
    let ecoData;

    beforeEach(() => {
        // Carrega as fixtures de login e de ecommerce
        cy.fixture('login').then((data) => {
            loginData = data;
        });

        cy.fixture('ecommerce').then((data) => {
            ecoData = data;
        });

        // Navega para a página de login
        LoginPage.navigate();

        // Realiza o login utilizando os dados da fixture
        cy.then(() => {
            LoginPage.login(loginData.validUser.username, loginData.validUser.password);
        });
    });

    it('CT07 - Realizar compra com sucesso preenchendo todos os campos', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(ecoData.validAddress);
        EcommerceActions.verificarCompraComSucesso('Congrats!');
    });

    it('CT08 - Impedir finalização da compra com todos os campos vazios', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(ecoData.noAddress);
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="phone"]');
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="street"]');
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="city"]');
        EcommerceActions.verificarCountryObrigatorio();
    });

    it('CT09 - Impedir finalização da compra com campo Phone number vazio', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(ecoData.noPhone);
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="phone"]');
    });

    it('CT10 - Impedir finalização da compra com campo Street vazio', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(ecoData.noStreet);
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="street"]');
    });

    it('CT11 - Impedir finalização da compra com campo City vazio', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(ecoData.noCity);
        EcommerceActions.verificarCampoObrigatorioBarrouNavegador('[name="city"]');
    });

    it('CT12 - Impedir finalização da compra com campo Country vazio', () => {
        EcommerceActions.adicionarProdutosEPreencherCompra(
        ecoData.noCountry
    );
        EcommerceActions.verificarCountryObrigatorio();
    });
    
});