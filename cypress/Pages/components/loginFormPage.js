import { password, userEmail } from "../../Pages/components/variables.cy";
class LoginFormPage {

    get emailField() {
        return cy.get("#email")
    }
    get passwordField() {
        return cy.get("#passwd")
    }
    fillEmail(emailField) {
        this.emailField.type(userEmail)

    }
    fillPassword(passwordField) {
        this.passwordField.type(password)
    }
    get submit() {
        return cy.get("#SubmitLogin > span")
    }
    signInClick(submit) {
        this.submit.click();
    }
}
export default new LoginFormPage();