/// <reference types='Cypress' />

describe('GET /user/login API', () => {
    it('should return 200 when the user logs into the system', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/login?username=bob&password=12345').then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it('should return 400 when invalid username/password supplied', () => {
        cy.request({
            method:'GET',
            url: 'https://petstore.swagger.io/v2/user/login?username=jao&password=45551',
            failOnStatusCode: false
        })
        .then(response => {
            expect(response.status).to.eq(400)
        })
    })
})