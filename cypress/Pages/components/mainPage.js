Cypress.Commands.add('visitMainPage', () => {
    cy.visit("http://www.automationpractice.pl/index.php?");
    cy.url().should('eq', 'http://www.automationpractice.pl/index.php?');
    cy.title().should('eq', 'My Shop')
})
Cypress.Commands.add('visitMainPageParaBank', () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');
    // cy.title().should('eq', 'My Store')
})


