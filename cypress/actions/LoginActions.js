import LoginPage from '../pages/LoginPage';

class LoginActions {

    login(username, password) {
        LoginPage.login(username, password)
    }

    verifyValidLogin(expectedText) {
        LoginPage.verifyValidLogin(expectedText)
    }

    verifyInvalidLogin(expectedText) {
        LoginPage.verifyInvalidLogin(expectedText)
    }

    verifyValidLogout(expectedText) {
        LoginPage.verifyValidLogout(expectedText)
    }
}

export default new LoginActions()