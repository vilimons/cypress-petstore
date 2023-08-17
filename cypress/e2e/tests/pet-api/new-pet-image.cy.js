/// <reference types='Cypress' />


describe('POST /pet/uploadImage API', () => {
    it('should upload an image to a pet', () => {
        cy.request('POST', 'https://petstore.swagger.io/v2/pet/0/uploadImage', {id: 0, file: cy.fixture('image.png')})
        .then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message')
        })
    })
})