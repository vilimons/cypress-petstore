/// <reference types='Cypress' />

import ORDER from "../../../support/objects/order-object";

beforeEach(() => {
  cy.request(
    'POST',
    'https://petstore.swagger.io/v2/store/order',
    ORDER
  ).then(response => {
    expect(response.status).to.eq(200)
  })
})

describe('GET /store/inventory API', () => {
  
    it('should return 200 when the inventory is successfully returned', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response) => {
        expect(response.status).to.equal(200);
      });
    });

    it('should return an object with inventory count by status', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then(response => {
        expect(response.body).to.have.keys("sold",
        "aviable",
        "Sold",
        "VL4EQE",
        "placed",
        "string",
        "pending",
        "available",
        "soldout")
      })
    })
});
