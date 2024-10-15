describe('Navigation', () => {
    it('should navigate to the home page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Find a link with an href attribute containing "sign in" and click it
        cy.get('a[href*="sign-in"]').click()

        // The new url should include "/about"
        cy.url().should('include', '/sign-in')

        // The new page should contain an h1 with "About"
        // cy.get('h1').contains('About')
    })
})

