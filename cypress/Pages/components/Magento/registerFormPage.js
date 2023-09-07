import { firstName, lastName, userEmail, passwordd } from "./VariablesMagento.cy";
class registerFormPage {

    get firstname() {
        return cy.get('#firstname')
    }
    fillFirstName(firstname) {
        this.firstname.type(firstName)
    }
    get lastname() {
        return cy.get('#lastname')
    }
    fillLastName(lastname) {
        this.lastname.type(lastName)
    }
    get email() {
        return cy.get('#email_address')
    }
    fillEmail(email) {
        this.email.type(userEmail)
    }
    get password() {
        return cy.get('#password')
    }
    fillPassword(password) {
        this.password.type(passwordd)
    }
    get confirmedPassword() {
        return cy.get('#password-confirmation')
    }
    confirmPassword(confirmedPassword) {
        this.confirmedPassword.type(passwordd)
    }

}
export default new registerFormPage();