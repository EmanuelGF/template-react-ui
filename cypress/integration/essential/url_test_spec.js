describe('Visits Website.', () => {
    it('Is live and shows some content.', () => {
        cy.visit('http://localhost:3000') //Dont forget to change this to the correct url.
        cy.get('h1').should('contain', 'React template')
    })
})