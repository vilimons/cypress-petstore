/// <reference types='Cypress' />

describe('GET /user/logout API', () => {
    it('should return 200 when the user logout the system', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then(response => {
            expect(response.status).to.eq(200)
        })
    })
})