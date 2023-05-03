/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';


describe("E2E - Registering a new user", () => {
    it(" Should be able to register a new user ", () => {
        // Visit home page and verify URL and title
        cy.visit("/")
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')

        // Click on the "Sign In" button and verify URL
        cy.get(".login").click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')

        // Enter user email and click on the "Create an account" button and verify field
        cy.get("#email_create").invoke('show').type(userEmail);
        cy.get("#email_create").should('have.value', userEmail)
        cy.get("#SubmitCreate > span").click()


        // Complete the registration form and verify form fields
        // Select title checkbox
        cy.get("#id_gender1").check().should('be.checked')

        // Enter first name and verify
        cy.get("#customer_firstname").type("Dariusz").should('have.value', 'Dariusz')

        // Enter last name and verify
        cy.get("#customer_lastname").type("Bamboo").should('have.value', 'Bamboo')

        // Enter password and verify 
        cy.get("#passwd").type(password).should('have.value', password)

        // Select birth day and verify 
        cy.get('#days').select(24).should('have.value', '24')

        // Select birth month and verify
        cy.get('#months').select("July").should('contain.text', 'July')

        // Select birth year and verify 
        cy.get('#years').select("1991").should('have.value', "1991")

        // Select newsletter checkbox and verify 
        cy.get("#newsletter").check().should('be.checked')

        // Select offers checkbox and verify 
        cy.get("#optin").click().should('be.checked')

        // Click on the "Register" button
        cy.get("#submitAccount > span").click()

        // Verify that user account has been created successfully
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".alert").should('contain', 'Your account has been created')

        // Log out and verify URL
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account');
    });
})
