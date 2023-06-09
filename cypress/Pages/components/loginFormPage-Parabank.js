
class LoginFormPage {
    get emailField() {
        return cy.get("input[name='username']")
    }
    get passwordField() {
        return cy.get("input[name='password']")
    }
    fillEmail(userEmail1) {
        this.emailField.type(userEmail1)

    }
    fillPassword(password1) {
        this.passwordField.type(password1)
    }
    get submit() {
        return cy.get("input[value='Log In']")
    }
    get submitClick() {
        this.submit.click();
    }

}
export default new LoginFormPage();