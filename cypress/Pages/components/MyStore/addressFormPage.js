import { companyName, addressName1, addressName2, firstName, lastName, city, state, postCode, country, phoneNumberMobile, phoneNumberHome, additionalInformation, myAddress } from "./variables.cy";

class addressFormPage {
    get addressTab() {
        return cy.get('.myaccount-link-list > :nth-child(1) > a > span')
    }
    clickOnAddressTab(addressTab) {
        this.addressTab.click();
    }
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
    get companyname() {
        return cy.get("#company")
    }
    fillCompanyName(companyname) {
        this.companyname.type(companyName)
    }
    get address1() {
        return cy.get("#address1")
    }
    fillAddressName1(address1) {
        this.address1.type(addressName1)
    }
    get address2() {
        return cy.get("#address2")
    }
    fillAddressName2(address2) {
        this.address2.type(addressName2)
    }
    get cityname() {
        return cy.get("#city")
    }
    fillCityName(cityname) {
        this.cityname.type(city)
    }
    get stateName() {
        return cy.get("#id_state")
    }
    chooseStateName(stateName) {
        this.stateName.select(state)
    }
    get postcodeNumber() {
        return cy.get("#postcode")
    }
    fillPostCode(postcodeNumber) {
        this.postcodeNumber.type(postCode)
    }
    get countryName() {
        return cy.get("#id_country")
    }
    fillCountryName(countryName) {
        this.countryName.type(country)
    }
    get phone() {
        return cy.get("#phone")
    }
    fillHomePhoneNumber(phone) {
        this.phone.type(phoneNumberHome)
    }
    get mobilephone() {
        return cy.get("#phone_mobile")
    }
    fillMobilePhoneNumber(mobilephone) {
        this.mobilephone.type(phoneNumberMobile)
    }
    get extraInformation() {
        return cy.get("#other")
    }
    fillExtraInformationField() {
        this.extraInformation.type(additionalInformation)
    }
    get myAddresField() {
        return cy.get("#alias")
    }
    confirmMyAddresTitle(myAddresField) {
        this.myAddresField.should('have.value', myAddress)
    }
}
export default new addressFormPage();