

describe('GET /store/inventory API', () => {
  
    it('should return 200 when the inventory is successfully returned', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response) => {
        expect(response.status).to.equal(200);
      });
    });
});
