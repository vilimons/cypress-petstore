/// <reference types='Cypress' />

describe('POST /user API', () => {
    it('should return 200 when a new user is successfully created', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).length.to.be.greaterThan(1)
        })
    })
})