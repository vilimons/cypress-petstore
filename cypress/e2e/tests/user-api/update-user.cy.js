////// <reference types='Cypress' />

describe('PUT /user/username API', () => {
    it('should return 200 when the user is updated', () => {
        cy.request('PUT', '/user/bob',
         {
            id: 1,
            username: "bob",
            firstName: "bob",
            lastName: "mcdonald",
            email: "bobmcdonald@email.com",
            password: "12345",
            phone: "54321",
            userStatus: 1   
         }
         ).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})