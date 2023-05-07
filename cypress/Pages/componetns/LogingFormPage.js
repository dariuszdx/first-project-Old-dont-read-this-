class LoginFormPage {
    get emailField() {
        return cy.get("#email")
    }
    get passwordField() {
        return cy.get("#passwd")
    }
    fillEmail(userEmail) {
        this.emailField.type(userEmail)
    }
    fillPassword(password) {
        this.passwordField.type(password)
    }
    get submit() {
        return cy.get("#SubmitLogin > span")
    }
    get submitClick() {
        this.submit.click();
    }

}
export default new LoginFormPage();