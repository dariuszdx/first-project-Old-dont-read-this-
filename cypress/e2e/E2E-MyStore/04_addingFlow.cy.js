import { describe, before, it } from 'mocha';
import { originDomain } from "../../Pages/components/MyStore/variables.cy";
import authorization, { } from "../../Pages/components/MyStore/authorization";
import loginFormPage from '../../Pages/components/MyStore/loginFormPage';


describe("E2E - Adding to basket flow", () => {
    before(() => {
        cy.visit('/');
        authorization.clickLogin();
    });

    it("Complete login fields and authorize", () => {
        loginFormPage.fillEmail();
        loginFormPage.fillPassword();
        loginFormPage.signInClick();

        const accountPageMessage = "Welcome to your account. Here you can manage all of your personal information and orders."
        cy.get(".info-account").should('contain', accountPageMessage)
    })

    // it('My-account page should be open and authorize', () => {
    //     const accountPage = `${originDomain}controller=my-account`;
    //     cy.url().should('eq', accountPage)
    // })

    // it('"Welcome to your account" message should be visible ', () => {
    //     const accountPageMessage = "Welcome to your account. Here you can manage all of your personal information and orders."
    //     cy.get(".info-account").should('contain', accountPageMessage)
    // })

    // it('Should open "Dresses" category-page and verify', () => {
    //     cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    //     const dressesPage = `${originDomain}/index.php?id_category=8&controller=category`
    //     cy.url().should('eq', dressesPage)
    // });

    // it('Should apply category and QTY filters and verify', () => {
    //     cy.get('#layered_category_9').click().should('be.checked')
    //     cy.get('#layered_category_10').click().should('be.checked')
    //     cy.get('#layered_category_11').click().should('be.checked')
    //     cy.get('#layered_id_attribute_group_2').click().should('be.checked')
    // });

    // it('Should add the first product to the cart and verify', () => {
    //     cy.get('.product-container').eq(0).trigger('mouseover')
    //     cy.get('.ajax_add_to_cart_button').eq(0).click()
    //     cy.get('.layer_cart_product h2').should('contain', 'Product successfully added to your shopping cart')
    //     cy.get('.continue > span').click()
    // });

    // it('Should add the fifth product to the cart and verify', () => {

    //     cy.get('.product_list .product-container').eq(4).trigger('mouseover')
    //     cy.get('.ajax_add_to_cart_button').eq(4).click()
    //     cy.get('.layer_cart_product h2').should('contain', 'Product successfully added to your shopping cart')
    //     cy.get('.continue > span').click()
    // });

    // it('Should verify that the items are in the cart', () => {
    //     cy.get('.shopping_cart > a').click()
    //     cy.url().should('eq', 'http://automationpractice.pl/index.php?controller=order')
    //     cy.get('.cart_description .product-name').eq(0)
    // });

    it('User should be logged out', () => {
        authorization.clickLogout();
        const logout = `${originDomain}/index.php?controller=authentication&back=my-account`;
        cy.url().should('eq', logout);
    })
})
