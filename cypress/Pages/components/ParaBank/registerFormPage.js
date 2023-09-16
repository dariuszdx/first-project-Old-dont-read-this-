import { userName, password, firstName, lastName, address, city, state, zipCode, phoneNumber, ssn } from "./variablesParaBank.cy";
class registerFormPage {
    get firstname() {
        return cy.get("input[name='customer.firstName']")
    }
    fillFirstName(firstname) {
        this.firstname.type(firstName)
    }
    get lastname() {
        return cy.get("input[name='customer.lastName']")
    }
    fillLastName(lastname) {
        this.lastname.type(lastName)
    }
    get Address() {
        return cy.get("input[name='customer.address.street']")
    }
    fillAddress(Address) {
        this.Address.type(address)
    }
    get City() {
        return cy.get("input[name='customer.address.city']")
    }
    fillCityName(City) {
        this.City.type(city)
    }
    get State() {
        return cy.get("input[name='customer.address.state']")
    }
    fillStateName(State) {
        this.State.type(state)
    }
    get ZipCode() {
        return cy.get("input[name='customer.address.zipCode']")
    }
    fillZipCode(ZipCode) {
        this.ZipCode.type(zipCode)
    }
    get PhoneNumber() {
        return cy.get("input[name='customer.phoneNumber']")
    }
    fillPhoneNumber(PhoneNumber) {
        this.PhoneNumber.type(phoneNumber)
    }
    get SSN() {
        return cy.get("input[name='customer.ssn']")
    }
    fillSSnNumber(SSN) {
        this.SSN.type(ssn)
    }
    get Username() {
        return cy.get("input[name='customer.username']")
    }
    fillUserName(Username) {
        this.Username.type(userName)
    }
    get Password() {
        return cy.get("input[name='customer.password']")
    }
    fillPassword(Password) {
        this.Password.type(password)
    }
    get confirmed() {
        return cy.get("input[name='repeatedPassword']")
    }
    confirmPassword(confirmed) {
        this.confirmed.type(password)
    }
    get btnAlias() {
        return cy.get('[colspan="2"] > .button')
    }
    clickBtn(btnAlias) {
        this.btnAlias.click();
    }
}
export default new registerFormPage();