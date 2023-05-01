/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';


describe("E2E - Registration of user", () => {
    it(" Registration ", () => {
        //Go to the page
        cy.visit("/")
        //Assertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')
        //Clicking on the "Sign In" button
        cy.get(".login").click();
        //Asertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Entering a value in the E-mail address field
        cy.get("#email_create").invoke('show').type(userEmail);
        //Asertion 
        cy.get("#email_create").should('have.value', userEmail)
        //Clicking on the "Create an account" button
        cy.get("#SubmitCreate > span").click()


        //Completing fields + assertions
        // Checkbox Title
        cy.get("#id_gender1").check().should('be.checked')
        // Fisrtname field
        cy.get("#customer_firstname").type("Dariusz").should('have.value', 'Dariusz')
        // Lastname field 
        cy.get("#customer_lastname").type("Bamboo").should('have.value', 'Bamboo')
        // Password field
        cy.get("#passwd").type(password).should('have.value', password)
        // Dropdown days
        cy.get('#days').select(24).should('have.value', '24')
        // Dropdown months
        cy.get('#months').select("July").should('contain.text', 'July')
        // Dropdown years
        cy.get('#years').select("1991").should('have.value', "1991")
        // Checkbox newsletter
        cy.get("#newsletter").check().should('be.checked')
        // Checkbox offers
        cy.get("#optin").click().should('be.checked')
        // Clicking on the "Register" button
        cy.get("#submitAccount > span").click()
        // Asertion for creating account
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".alert").should('contain', 'Your account has been created')
        //Log out + Assertion
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account');
    });
})
