/// <reference types='Cypress' />

const USER_OBJECT_LIST = [
    {
      id: 2,
      username: "maria",
      firstName: "maria",
      lastName: "ramirez",
      email: "mariaramirez@email.com",
      password: '12345',
      phone: '12345',
      userStatus: 1,
    },
  ];

describe('POST /user API', () => {
    it('should return 200 when a new user is successfully created', () => {
        cy.request('POST', 
                  '/user/createWithList',
                    USER_OBJECT_LIST).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})