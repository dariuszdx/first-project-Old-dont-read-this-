import { describe, before, it, beforeEach } from 'mocha';
import { userName, password, originDomain } from '../../Pages/components/ParaBank/variablesParaBank.cy';
import registerFormPage from '../../Pages/components/ParaBank/registerFormPage';


describe("E2E - Register a new user", () => {
    before(() => {
        cy.visit(originDomain);

        const mainPage = `${originDomain}`;
        cy.url().should('eq', mainPage);
    });

    it('Register page should be open', () => {
        registerFormPage.clickRegisterButton();
    });

    it('Should complete the registration form and verify fields', () => {

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
    });

    it("Login page should be open", () => {
        const loginPage = `${originDomain}/parabank/register.htm`;
        cy.url().should('eq', loginPage);
    })
    it("User should be logged out", () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        const mainPage2 = `${originDomain}/parabank/index.htm?ConnType=JDBC`;
        cy.url().should('eq', mainPage2);

    })
})

