/// <reference types='Cypress' />

describe('POST /pet API', () => {
    beforeEach(() => {
        cy.visit('https://petstore.swagger.io/#/')
    })
    
    
    it('should return 200 when a new pet is successfully created ', () => {
        cy.get('.btn > span').click()
        cy.get(':nth-child(5) > section > input').type('special-key')
        cy.get('form > .auth-btn-wrapper > .authorize').click()
    })
})