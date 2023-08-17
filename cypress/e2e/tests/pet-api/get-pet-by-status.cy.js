/// <reference types='Cypress' />

describe('GET /pet/findByStatus API', () => {
    it('should return 200 when a valid status is entered', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then(response => {
            expect(response.status).to.eq(200)
        })
    })
})