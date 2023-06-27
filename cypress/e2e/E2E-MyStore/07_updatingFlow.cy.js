/// <reference types= "cypress"/>
import { userEmail, password } from '../../Pages/components/variables.cy';
import LogingFormPage, { LoginFormPage } from '../../Pages/componetns/LogingFormPage.js';

describe("E2E -Updating the quantity of product", () => {
    it(" Should be able to change quanitity of product in basket ", () => {

        // Visit home page and verify URL and title
        cy.visit("/")
        cy.url().should('eq', 'http://automationpractice.pl/index.php')
        cy.title().should('eq', 'My Store')

        // Click on the "Sign In" button and verify URL
        cy.get(".login").click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=authentication&back=my-account')

        // Enter email and password and click on the "Sign in" button
        LogingFormPage.fillEmail(userEmail)
        LogingFormPage.emailField.should("have.value", userEmail)
        LogingFormPage.fillPassword(password)
        LogingFormPage.passwordField.should("have.value", password)
        LogingFormPage.submitClick

        // Verify that the user has successfully logged to the account page
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=my-account')
        cy.get(".info-account").should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')

        // Click on the "Women" category link and verify the URL
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?id_category=8&controller=category')

        // Apply category and quantity filters and verify that they have been applied
        cy.get('#layered_category_9').click().should('be.checked')
        cy.get('#layered_category_10').click().should('be.checked')
        cy.get('#layered_category_11').click().should('be.checked')
        cy.get('#layered_quantity_1').click().should('be.checked')

        // Add the first product to the cart and verify that it has been added
        cy.get('.product-container').eq(0).trigger('mouseover')
        cy.get('.ajax_add_to_cart_button').eq(0).click()
        cy.get('.layer_cart_product h2').should('contain', 'Product successfully added to your shopping cart')
        cy.get('.continue > span').click()

        // Add the fifth product to the cart and verify that it has been added
        cy.get('.product_list .product-container').eq(4).trigger('mouseover')
        cy.get('.ajax_add_to_cart_button').eq(4).click()
        cy.get('.layer_cart_product h2').should('contain', 'Product successfully added to your shopping cart')
        cy.get('.continue > span').click()

        // Verify that the items are in the cart
        cy.get('.shopping_cart > a').click()
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=order')
        cy.get('.cart_description .product-name').eq(0)

        // Change QTY of product and verify new quantity- value of the locator need to be changed every single test to avoid issue "I didnt resolve that locator problem yet"
        cy.get('.cart_quantity [type="text"]').first().type(3).wait(2000).should('have.value', 3)
        cy.get('.cart_quantity [type="text"]').eq(1).type(2).wait(2000).should('have.value', 2)

        // Click on the "Sign Out" button and verify URL
        cy.get('.logout').click();
        cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=order')

    })
})
