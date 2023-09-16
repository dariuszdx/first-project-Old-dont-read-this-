import { birthDay, birthMonth, birthYear, firstName, lastName, password, userEmail } from "./variables.cy";

class RegisterFormPage {
    get emailCreatField() {
        return cy.get('#email_create')
    }
    fillEmail(emailCreatField) {
        this.emailCreatField.type(userEmail)
    }
    get createAccountButton() {
        return cy.get('#SubmitCreate > span')
    }
    clickCreateAccountButton(createAccountButton) {
        this.createAccountButton.click();
    }
    get gender() {
        return cy.get("#id_gender1")
    }
    markGender(gender) {
        this.gender.check();
    }
    get firstname() {
        return cy.get('#customer_firstname')
    }
    fillFirstName(firstname) {
        this.firstname.type(firstName)
    }
    get lastname() {
        return cy.get('#customer_lastname')
    }
    fillLastName(lastname) {
        this.lastname.type(lastName)
    }
    get passworD() {
        return cy.get('#passwd')
    }
    fillPassword(passworD) {
        this.passworD.type(password)
    }
    get birthday() {
        return cy.get('#days')
    }
    markBirthDay(birthday) {
        this.birthday.select(birthDay)
    }
    get birthmonth() {
        return cy.get('#months')
    }
    markBirthMonth() {
        this.birthmonth.select(birthMonth)
    }
    get birthyear() {
        return cy.get('#years')
    }
    markBirthYear() {
        this.birthyear.select(birthYear)
    }
    get newsletter() {
        return cy.get("#newsletter")
    }
    markNewsletter() {
        this.newsletter.check();
    }
    get registerbutton() {
        return cy.get("#submitAccount > span")
    }
    clickRegisterButton() {
        this.registerbutton.click();
    }
}
export default new RegisterFormPage();