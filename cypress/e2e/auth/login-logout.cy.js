import LoginPage from '../../pages/LoginPage';
import LoginActions from '../../actions/LoginActions';

describe('Login', () => {

    let loginData;

    beforeEach(() => {
        cy.fixture('login').then((data) => {
            loginData = data;
        });

        cy.visit('https://qa-practice.razvanvancea.ro/auth_ecommerce.html');
    });

    it('CT01 - Realizar login com sucesso', () => {

        LoginActions.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        LoginActions.verifyValidLogin(
            loginData.validLogin.expectedText
        );

    });

    it('CT02 - Realizar logout com sucesso', () => {

        LoginActions.login(
            loginData.validUser.username,
            loginData.validUser.password
        )

     cy.get('#logout').click ()

        LoginActions.verifyValidLogout(
            loginData.validLogout.expectedText
         )    
    })

        const invalidScenarios = [
            {
                title: 'CT03 - Verificar msg de login com senha inválida',
                username: 'validUser',
                password: 'invalidPassword'
            },
            {
                title: 'CT04 - Verificar msg de login com usuário inválido',
                username: 'invalidUser',
                password: 'invalidUser'
            },
            {
                title: 'CT05 - Verificar msg de login com espaços em branco',
                username: 'blankSpaces',
                password: 'blankSpaces'
            }
        ];
    
        invalidScenarios.forEach((scenario) => {
    
            it(scenario.title, () => {
    
                LoginActions.login(
                    loginData[scenario.username].username,
                    loginData[scenario.password].password
                );
    
                LoginActions.verifyInvalidLogin(
                    loginData.invalidLogin.expectedText
                );
    
            });
    
        });
    
        it('CT06 - Verificar msg de login com campos vazios', () => {
    
            LoginPage.submitEmptyForm();
    
            LoginActions.verifyInvalidLogin(
                loginData.invalidLogin.expectedText
            );
    
        });
  
});