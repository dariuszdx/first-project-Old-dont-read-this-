import { city, company, country, phoneNumber, state, street, zipcode } from "./VariablesMagento.cy";

class ShippingFormPage {
    get companyField() {
        return cy.get('#company');
    }

    fillCompanyName() {
        this.companyField.type(company);
    }

    get streetAddressField() {
        return cy.get('#street_1');
    }

    fillStreetAddress() {
        this.streetAddressField.type(street);
    }

    get cityField() {
        return cy.get('#city');
    }

    fillCityName() {
        this.cityField.type(city);
    }

    get stateField() {
        return cy.get('#region_id');
    }

    selectStateName() {
        this.stateField.select('podkarpackie');
    }

    get zipCodeField() {
        return cy.get('#zip');
    }

    fillZipCode() {
        this.zipCodeField.type(zipcode);
    }

    get countryField() {
        return cy.get('#country');
    }

    selectCountry() {
        this.countryField.select('Poland');
    }

    get phoneField() {
        return cy.get('#telephone');
    }

    fillPhoneNumber() {
        this.phoneField.type(phoneNumber);
    }
    get next() {
        return cy.get('.button > span').should('be.visible');
    }
    clickNextButton() {
        this.next.click();
    }
    get placeOrder() {
        return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').should('be.visible');
    }
    clickPlaceOrderButton() {
        this.placeOrder.click();
    }
    get shippingMethod() {
        return cy.get('#checkout-shipping-method-load');
    }
    shippingMethodShouldBeVisible() {
        this.shippingMethod.should('be.visible');
    }
    get fiveDollarPaymant() {
        return cy.get('.radio')
    }
    paymantShouldBeCheck() {
        this.fiveDollarPaymant.should('be.checked');
    }
    get saveAddressButton() {
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action > span');
    }
    clickOnSaveAddresButton() {
        this.saveAddressButton.click();
    }
}

export default new ShippingFormPage();
