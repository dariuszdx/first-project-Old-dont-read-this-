describe('E2E-Responsive Design Test', () => {
    // Define the viewports to test
    const viewports = [
        { name: 'iphone-6', width: 375, height: 667 },
        { name: 'ipad-2', width: 768, height: 1024 },
        { name: 'macbook-13', width: 1280, height: 800 },
        { name: 'macbook-15', width: 1440, height: 900 }
    ];

    // Visit the page before each test
    beforeEach(() => {
        cy.visit('http://automationpractice.pl/index.php');
    });

    // Loop through each viewport and run the tests
    viewports.forEach((viewport) => {
        it(`Displays correctly on ${viewport.name} screen`, () => {
            // Set the viewport size
            cy.viewport(viewport.width, viewport.height);

            // Check that the header, columns, and footer are visible
            cy.get('.header-container').should('be.visible');
            cy.get('.columns-container').should('be.visible');
            cy.get('.footer-container').should('be.visible');
        });
    });
});