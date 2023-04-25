/// <reference types= "cypress"/>
import { userEmail, password } from './variables';


describe("E2E - Rejestarcja użytkownika", () => {
    it(" Rejestracja ", () => {
        //Przejście na strone
        cy.visit("/")
        //Asercja 
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')
        //Kliknięcie na przycisk "Sign In"
        cy.get(".login").click();
        // Asercja 
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')
        //Wpisane wartości w pole E-mail adress
        cy.get("#email_create").invoke('show').type(userEmail);
        //Asercja 
        cy.get("#email_create").should('have.value', 'dariusz.dulemba13@gmail.com')
        //Kliknięcie w przycisk "Create an account"
        cy.get("#SubmitCreate > span").click()


        //Uzupełnienie pól + asercje
        // Checkbox Title
        cy.get("#id_gender1").check().should('be.checked')
        // Pole firstname
        cy.get("#customer_firstname").type("Dariusz").should('have.value', 'Dariusz')
        // Pole lastname
        cy.get("#customer_lastname").type("Bamboo").should('have.value', 'Bamboo')
        // Pole password
        cy.get("#passwd").type(password).should('have.value', 'Password1!')
        // Dropdown days
        cy.get('#days').select(24).should('have.value', 24)
        // Dropdown months
        cy.get('#months').select("July").should('contain', "July")
        // Dropdown years
        cy.get('#years').select("1991").should('have.value', "1991")
        // Checkbox newsletter
        cy.get("#newsletter").check().should('be.checked')
        // Checkbox offers
        cy.get("#optin").click().should('be.checked')
        // Kliknięcie na przycisk "Register"
        cy.get("#submitAccount > span").click()
        // Asercja na utworznie konta.
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".alert").should('contain', 'Your account has been created')
        //Wylogowanie + Asercja

    })
})
