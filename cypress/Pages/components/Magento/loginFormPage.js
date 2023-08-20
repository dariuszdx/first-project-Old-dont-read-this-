import { userEmail, passwordd } from "../../components/Magento/vaiablesMagento.cy";
class loginFormPage {

    get email() {
        return cy.get('#email')
    }
    fillEmail(email) {
        this.email.type(userEmail)
    }
    get password() {
        return cy.get('#pass')
    }
    fillPassword(password) {
        this.password.type(passwordd)
    }
    get signIn() {
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
    }
    clickOnSignInButton(signIn) {
        this.signIn.click();
    }

}
export default new loginFormPage();