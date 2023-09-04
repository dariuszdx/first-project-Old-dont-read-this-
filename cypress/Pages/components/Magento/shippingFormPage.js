import { city, company, country, phoneNumber, state, street, zipcode } from "../../components/Magento/vaiablesMagento.cy";

class ShippingFormPage {
    get companyField() {
        return cy.get('input[name="company"]');
    }

    fillCompanyName() {
        this.companyField.type(company);
    }

    get streetAddressField() {
        return cy.get('input[name="street[0]"]');
    }

    fillStreetAddress() {
        this.streetAddressField.type(street);
    }

    get cityField() {
        return cy.get('input[name="city"]');
    }

    fillCityName() {
        this.cityField.type(city);
    }

    get stateField() {
        return cy.get('select[name="region_id"]');
    }

    selectStateName() {
        this.stateField.select('podkarpackie');
    }

    get zipCodeField() {
        return cy.get('input[name="postcode"]');
    }

    fillZipCode() {
        this.zipCodeField.type(zipcode);
    }

    get countryField() {
        return cy.get('select[name="country_id"]');
    }

    selectCountry() {
        this.countryField.select('Poland');
    }

    get phoneField() {
        return cy.get('input[name="telephone"]');
    }

    fillPhoneNumber() {
        this.phoneField.type(phoneNumber);
    }
    get next() {
        return cy.get('.button > span')
    }
    clickNextButton() {
        this.next.click();
    }
    get placeOrder() {
        return cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span')
    }
    clickPlaceOrderButton() {
        this.placeOrder.click();
    }
}

export default new ShippingFormPage();
