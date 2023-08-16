/// <reference types='Cypress' />

describe('POST /pet API', () => {
        
    it('should return 200 when a new pet is successfully created ', () => {
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
                id: 0,
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
})