/// <reference types='Cypress' />

describe('POST /user API', () => {
    it('should return 200 when a new user is successfully created', () => {
        cy.request('POST', 
                  '/user',
                  {
                    id: 1,
                    username: "bob",
                    firstname: "bob",
                    lastname: "mcdonald",
                    email: "bobmcdonaldo@email.com",
                    password: '12345',
                    phone: '54321',
                    userStatus: 0
                   }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})