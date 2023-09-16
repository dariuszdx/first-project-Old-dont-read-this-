import { userEmail, passwordd } from "./VariablesMagento.cy";
class LoginFormPage {

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
        return cy.get('.panel > .header > .authorization-link > a')
    }
    clickOnSignInButton(signIn) {
        this.signIn.click();
    }
    get signIn2() {
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2')
    }
    clickOnSignInButton2(signIn2) {
        this.signIn2.click();
    }

}
export default new LoginFormPage();