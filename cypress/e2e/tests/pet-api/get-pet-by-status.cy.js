/// <reference types='Cypress' />

describe('GET /pet/findByStatus API', () => {
    it("should return 200 when the status 'available' is entered", () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it("should return 200 when the status 'pending' is entered", () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending').then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it("should return 200 when the status 'sold' is entered", () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then(response => {
            expect(response.status).to.eq(200)

    })
})
})