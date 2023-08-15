/// <reference types='Cypress' />

describe('POST /store API', () => {
    it('should return 200 when a new order is successfully created', ()=>{
        cy.request('POST', 'https://petstore.swagger.io/v2/store/order', {id: 1, petId: 1, quantity: 1, shipDate: '2023-08-15T20:41:24.097Z', status: '', complete: true}).then(response => {
            expect(response.body).to.have.property('id', 1)
        })
    })
    it('should', ()=>{
        cy.request('GET', 'https://petstore.swagger.io/v2/store/order/1').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.a('object');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('petId');
            expect(response.body).to.have.property('quantity');
            expect(response.body).to.have.property('shipDate');
            expect(response.body).to.have.property('status');
            expect(response.body).to.have.property('complete');
        })
    })

})
