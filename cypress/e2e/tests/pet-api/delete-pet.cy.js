describe('DELETE /pet/petId API', () => {
    beforeEach(() => {
        
            cy.request('POST', '/pet', {
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
        it('should return 200 when the pet is successfully deleted', () => {
            cy.request('DELETE', '/pet/1').then((response) => {
              expect(response.status).to.equal(200);
            })
        })
      })
  
