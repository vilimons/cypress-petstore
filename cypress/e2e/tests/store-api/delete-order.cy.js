
describe('DELETE /store/order/{orderId} API', () => {

    it('should return 200 when the order is successfully deleted', () => {
        cy.request('DELETE', `https://petstore.swagger.io/v2/store/order/5`).then((response) => {
        expect(response.status).to.equal(200);
        });
    });

    it('should return 400 when the orderId is invalid', () => {
        cy.request({
        method: 'DELETE',
        url: `https://petstore.swagger.io/v2/store/order/jdwq`,
        failOnStatusCode: false,
        }).then((response) => {
        expect(response.status).to.eq(404);
        });
    });
});
