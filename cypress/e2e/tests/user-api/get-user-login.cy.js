/// <reference types='Cypress' />

describe('GET /user/login API', () => {
    it('should return 200 when the user logs into the system', () => {
        cy.request('GET', '/user/login?username=bob&password=12345').then(response => {
            expect(response.status).to.eq(200)
        })
    })
})