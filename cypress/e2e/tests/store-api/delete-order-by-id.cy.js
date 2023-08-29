/// <reference types='Cypress' />

import ORDER from '../../../support/objects/order-object.js';

describe('DELETE /store/order/{orderId} API', () => {
    beforeEach(() => {
        cy.request(
            'POST',
            '/store/order',
            ORDER)
          .then(response => {
            expect(response.status).to.eq(200)
          })
    })

    it('should return 200 when the order is successfully deleted', () => {
        cy.request('DELETE', `/store/order/5`).then((response) => {
        expect(response.status).to.equal(200);
        });
    });

    it('should return 404 when the orderId is invalid', () => {
        cy.request({
        method: 'DELETE',
        url: `/store/order/jdwq`,
        failOnStatusCode: false,
        }).then((response) => {
        expect(response.status).to.eq(404);
        });
    });
});
