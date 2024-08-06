const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5iubio',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
