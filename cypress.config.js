const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    charts: true,
    embeddedScreenshots: true,
    saveAllAttempts: true,
    html: true,
    json: false,
  },
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});

