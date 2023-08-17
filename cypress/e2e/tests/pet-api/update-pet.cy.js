/// <reference types='Cypress' />

describe('PUT /pet API', () => {
    it('should return 200 when the pet is successfully updated', () => {
        const PET_UPDATED = {
            id: 0,
            category: {
                id: 0,
                name: 'string'
            },
            name: 'doggie',
            photoUrls: [
                'string'
            ],
            tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
            status: 'available'
        }
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', PET_UPDATED).then(response => {
            expect(response.status).to.eq
        })

    })
})