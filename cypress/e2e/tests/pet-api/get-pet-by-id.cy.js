/// <reference types='Cypress' />

describe('GET /pet/findById API', () => {
    beforeEach(() => {
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
                    id: 1,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }
            ).then((response) => {
                expect(response.status).to.eq(200)
            })
    })
    it("should return 200 when a valid id is entered", () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/pet/1').then(response => {
            expect(response.status).to.eq(200)
        })
    })
    it("should return 404 when an invalid id is entered", () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/0',
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(404)
        })
    })
})