import { describe, before, it, } from 'mocha';
import { originDomain } from '../../Pages/components/ParaBank/variablesParaBank.cy';
import registerFormPage from '../../Pages/components/ParaBank/registerFormPage';
import authorization from '../../Pages/components/ParaBank/authorization';


describe("E2E - Register a new user", () => {
    before(() => {
        cy.visit(originDomain);

        const mainPage = `${originDomain}/parabank/index.htm`;
        cy.url().should('eq', mainPage);
    });

    it('Register page should be open', () => {
        authorization.clickRegisterButton();
    });

    it('Should complete the registration and login', () => {

        registerFormPage.fillFirstName();
        registerFormPage.fillLastName();
        registerFormPage.fillAddress();
        registerFormPage.fillCityName();
        registerFormPage.fillStateName();
        registerFormPage.fillZipCode();
        registerFormPage.fillPhoneNumber();
        registerFormPage.fillSSnNumber();
        registerFormPage.fillUserName();
        registerFormPage.fillPassword();
        registerFormPage.confirmPassword();
        registerFormPage.clickBtn();

        const loginPage = `${originDomain}/parabank/register.htm`;
        cy.url().should('eq', loginPage);
    })
    it("User should be logged out", () => {
        authorization.clickLogoutButton();
        const mainPage2 = `${originDomain}/parabank/index.htm?ConnType=JDBC`;
        cy.url().should('eq', mainPage2);

    })
})

