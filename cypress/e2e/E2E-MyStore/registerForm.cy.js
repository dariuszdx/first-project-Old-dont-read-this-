import { describe, before, it } from 'mocha';
import registerFormPage from "../../Pages/components/registerFormPage";
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from './variables.cy';

const originDomain = 'http://automationpractice.pl';

describe("E2E - Register a new user", () => {
    before(() => {
        cy.visitMainPage();
        cy.get(".login").click();

        it('Authentication page should be open', () => {
            const loginPage = `${originDomain}/index.php?controller=authentication&back=my-account`;
            cy.url().should('eq', loginPage);
        });
    });

    describe('Fill email field and authorize', () => {
        before(() => {
            registerFormPage.fillEmail(userEmail);
            registerFormPage.emailCreatField.should("have.value", userEmail);
            registerFormPage.CreateAccountButton.click();
        })

        it('Should open the registration form and verify', () => {
            const registerPage = `${originDomain}/index.php?controller=authentication&back=my-account#account-creation`;
            cy.url().should('eq', registerPage);

        })

        it('Should complete the registration form and verify form fields', () => {
            // Select title checkbox
            cy.get("#id_gender1").check()
            cy.get("#id_gender1").should('be.checked');

            // Enter first name and verify
            cy.get("#customer_firstname").type("John").should('have.value', 'John');

            // Enter last name and verify
            cy.get("#customer_lastname").type("Doe").should('have.value', 'Doe');

            // Enter password and verify 
            cy.get("#passwd").type(password).should('have.value', password);

            // Select birth day and verify 
            cy.get('#days').select(24).should('have.value', '24');

            // Select birth month and verify
            cy.get('#months').select("July").should('contain.text', 'July');

            // Select birth year and verify 
            cy.get('#years').select("1991").should('have.value', "1991");

            // Select newsletter checkbox and verify 
            cy.get("#newsletter").check().should('be.checked');

            // Select offers checkbox and verify 
            cy.get("#optin").click().should('be.checked');

            // Click on the "Register" button
            cy.get("#submitAccount > span").click();
        });


        it('Account should be created successfully', () => {
            const createdAccountPage = `${originDomain}/index.php?controller=my-account`;
            cy.url().should('eq', createdAccountPage);
        });


        it('"Created Account" message should be visible', () => {
            const createdAccountmessage = 'Your account has been created';
            cy.get(".alert").should('contain', createdAccountmessage);
        });


        it('User should be logged out', () => {
            cy.get('.logout').click();
            const logout = `${originDomain}/index.php?controller=authentication&back=my-account`;
            cy.url().should('eq', logout);
        })
    })
})
