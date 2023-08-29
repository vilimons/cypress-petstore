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
        it('should return 404 when a petId is invalid', () => {
            cy.request({
                method: 'DELETE',
                url: '/pet/3',
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(404)
            }) 
        })
    })
  
