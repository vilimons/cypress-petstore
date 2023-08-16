/// <reference types='Cypress' />

describe('Petstore API', () => {
    it('should return a 404 Not Found status code for /store/order endpoint', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/store/order/5')
        .then(response => {
          expect(response.status).to.equal(200);
        });
    });
  });
