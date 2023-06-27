import { describe, before, it } from 'mocha';
import registerFormPage from "../../Pages/components/registerFormPage";
import { visitMainPage } from "../../Pages/components/mainPage";
import { userEmail, password } from '../../Pages/components/vaiablesMagento.cy';

const originDomain = 'https://magento.softwaretestingboard.com/';

describe("E2E-Register a new user", () => {
    before(() => {
        cy.visit(originDomain)
        cy.get('.panel > .header > :nth-child(3) > a').click();
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click();
    });

    it('Create new customer account should be open', () => {
        const registerpage = `${originDomain}customer/account/create/`;
        cy.url().should('eq', registerpage);
    })

    it('Complete registration fields and verify', () => {
        cy.get('#firstname').type('Dariusz').should('have.value', 'Dariusz')
        cy.get('#lastname').type('Dulemba').should('have.value', 'Dulemba')
        cy.get('#is_subscribed').check().should('be.checked')
        cy.get('#email_address').type(userEmail).should('have.value', userEmail)
        cy.get('#password').type(password).should('have.value', password)
        cy.get('#password-confirmation').type(password).should('have.value', password)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    })

    it('Account should be created successfully', () => {
        const accountPage = `${originDomain}customer/account/`;
        cy.url().should('eq', accountPage);
    })

    it('"Created Account" message should be visible', () => {
        const createdAccountmessage = 'Thank you for registering with Main Website Store.';
        cy.get(".message-success > div").should('contain', createdAccountmessage);
    })

    it('User should be logged out', () => {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
        cy.wait(7000);
        const logout = `${originDomain}`;
        cy.url().should('eq', logout);
    })
})