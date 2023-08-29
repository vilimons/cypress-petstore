const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2/',
    setupNodeEvents(on, config) {
      specPattern: 'cypress/integration/*.js'
    },
  },
});
