import { userName, password, firstName, lastName, address, city, state, zipCode, phoneNumber, ssn } from "./variablesParaBank.cy";
class LoginFormPage {

    get loginButton() {
        return cy.get("#loginPanel > :nth-child(3) > a")
    }

    clickLoginButton(loginButton) {
        this.loginButton.click();
    }
    get emailField() {
        return cy.get("input[name='username']")
    }
    get passwordField() {
        return cy.get("input[name='password']")
    }
    fillUserName(emailField) {
        this.emailField.type(userName)

    }
    fillPassword(passwordField) {
        this.passwordField.type(password)
    }
    get submit() {
        return cy.get("input[value='Log In']")
    }
    submitClick(submit) {
        this.submit.click();
    }
}
export default new LoginFormPage();