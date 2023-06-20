/// <reference types= "cypress"/>
import { visitMainPageParaBank } from "../../Pages/components/mainPage";
import { describe, before, it, beforeEach } from 'mocha';
import { userEmail, password, userEmail1, password1 } from './variables.cy';

const originDomain = 'https://parabank.parasoft.com';



describe('Menu Test', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    it('should navigate to the correct pages', () => {
        // Sprawdzanie linków w menu
        cy.contains('Home').click();
        cy.url().should('include', 'index.htm');

        cy.contains('About Us').click();
        cy.url().should('include', 'about.htm');

        cy.contains('Contact').click();
        cy.url().should('include', 'contact.htm');

        cy.contains('Services').click();
        cy.url().should('include', 'services.htm');

        cy.contains('Products').click();
        cy.url().should('include', 'overview.htm');

        cy.contains('Register').click();
        cy.url().should('include', 'register.htm');

        cy.contains('Log In').click();
        cy.url().should('include', 'login.htm');
    });

    it('should highlight the active link', () => {
        // Sprawdzanie, czy aktywny link jest podświetlony
        cy.contains('Home').should('have.class', 'selected');
        cy.contains('About Us').should('not.have.class', 'selected');
        cy.contains('Contact').should('not.have.class', 'selected');
        cy.contains('Services').should('not.have.class', 'selected');
        cy.contains('Products').should('not.have.class', 'selected');
        cy.contains('Register').should('not.have.class', 'selected');
        cy.contains('Log In').should('not.have.class', 'selected');
    });
});