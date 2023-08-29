/// <reference types='Cypress' />

import ORDER from '../../../support/objects/order-object.js';

describe('Petstore API', () => {
  beforeEach(() => {
    cy.request(
      'POST', 
      '/store/order', 
      ORDER)
      .then(response => {
      expect(response.status).to.eq(200)
  })
  })
    it('should return a 200 status code for /store/order endpoint', () => {
      cy.request('GET', '/store/order/5')
        .then(response => {
          expect(response.status).to.equal(200);
        });
    });
  });
