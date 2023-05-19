Cypress.Commands.add('visitMainPage', () => {
    cy.visit("/");
    cy.url().should('eq', 'http://automationpractice.pl/index.php');
    cy.title().should('eq', 'My Store')
})
