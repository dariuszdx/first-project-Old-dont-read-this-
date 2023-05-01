/// <reference types= "cypress"/>
import { userEmail, password } from './variables.cy';


describe("E2E - Completing the address", () => {
    it(" Address ", () => {
        //Go to the page
        cy.visit("/")
        //Assertion
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')
        //Clicking on the "Sign In" button
        cy.get(".login").click();
        //Assertion
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Entering a value in the E-mail address field
        cy.get("#email").invoke('show').type(userEmail);
        //Assertion 
        cy.get("#email").should('have.value', 'dariusz.dulemba@gmail.com')
        //Password field + assertion
        cy.get("#passwd").type(password).should('have.value', 'Password1!')
        //Clicking on the "Sign In" button
        cy.get("#SubmitLogin > span").click()
        //Assertion 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
        // Go to the address tab + assertion
        cy.get(".myaccount-link-list > :nth-child(1) > a > span").click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=address')
        // Assertion for first and lastname fields
        cy.get("#firstname").should('have.value', 'Dariusz')
        cy.get('#lastname').should('have.value', 'Bamboo')
        // Completing the remaining fields + assertions
        cy.get("#company").type('Cotton & Green Leaves')
        cy.get("#company").should('have.value', 'Cotton & Green Leaves')

        cy.get("#address1").type('Krakowska 100')
        cy.get("#address1").should('have.value', 'Krakowska 100')

        cy.get("#address2").type('N/A')
        cy.get("#address2").should('have.value', 'N/A')

        cy.get("#city").type('New York')
        cy.get("#city").should('have.value', 'New York')

        cy.get("#id_state").select("Alabama").should('contain', "Alabama")

        cy.get("#postcode").type('10001').should('have.value', '10001')

        cy.get("#id_country").should('contain', 'United States')

        cy.get("#phone").type(777777777777).should('have.value', 777777777777)

        cy.get("#phone_mobile").type(777777777778).should('have.value', 777777777778)

        cy.get("#other").type('N/A').should('have.value', "N/A")

        cy.get("#alias").should('have.value', "My address")

        // Click "Save" + assertion
        cy.get("#submitAddress > span").click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=addresses')

        // Log out + Assertion
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
    })
})