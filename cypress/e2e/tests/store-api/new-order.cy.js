/// <reference types='Cypress' />

import ORDER from '../../../support/objects/order-object.js';

describe('POST /order/store API', () => {
    it('should return 200 when a new order is successfully placed', () => {
        cy.request(
            'POST', 
            '/store/order', 
            ORDER)
            .then(response => {
            expect(response.status).to.eq(200)
        })
        
    })
})

