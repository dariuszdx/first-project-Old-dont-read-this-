describe('Page navigation test', () => {
    it('Can navigate to different pages and verify the correct page is displayed', () => {
        cy.visit('http://automationpractice.pl/index.php')

        // Click on the Women category link
        cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()

        // Verify that the page has been navigated to Women category
        cy.url().should('include', 'id_category=3')

        // Click on the Dresses category link
        cy.get('#block_top_menu > ul > li:nth-child(2) > a').click()

        // Verify that the page has been navigated to Dresses category
        cy.url().should('include', 'id_category=8')

        // Click on the T-shirts category link
        cy.get('#block_top_menu > ul > li:nth-child(3) > a').click()

        // Verify that the page has been navigated to T-shirts category
        cy.url().should('include', 'id_category=5')

    })
})