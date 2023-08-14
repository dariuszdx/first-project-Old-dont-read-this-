import { describe, before, it } from 'mocha';
import registerFormPage from "../../Pages/components/MyStore/registerFormPage";
import { originDomain } from "../../Pages/components/MyStore/variables.cy";
import authorization, { } from "../../Pages/components/MyStore/authorization";


describe("E2E - Register a new user", () => {
    before(() => {
        cy.visit('/');
        authorization.clickLogin();
    })

    it('Should open and complete the registration form', () => {
        registerFormPage.fillEmail();
        registerFormPage.clickCreateAccountButton();

        const registerPage = `${originDomain}/index.php?controller=authentication&back=my-account#account-creation`;
        cy.url().should('eq', registerPage);

        // Select title checkbox
        registerFormPage.markGender();

        // Enter first name and verify
        registerFormPage.fillFirstName();

        // Enter last name and verify
        registerFormPage.fillLastName();

        // Enter password and verify 
        registerFormPage.fillPassword();

        // Select birth day and verify 
        registerFormPage.markBirthDay();

        // Select birth month and verify
        registerFormPage.markBirthMonth();

        // Select birth year and verify 
        registerFormPage.markBirthYear();

        // Select newsletter checkbox and verify 
        registerFormPage.markNewsletter();

        // Click on the "Register" button
        registerFormPage.clickRegisterButton();
    });

    it('Account should be created successfully', () => {
        const createdAccountPage = `${originDomain}/index.php?controller=my-account`;
        cy.url().should('eq', createdAccountPage);

        const createdAccountmessage = 'Your account has been created';
        cy.get(".alert").should('contain', createdAccountmessage);
    });

    it('User should be logged out', () => {
        authorization.clickLogout();
        const logout = `${originDomain}/index.php?controller=authentication&back=my-account`;
        cy.url().should('eq', logout);
    })
})

