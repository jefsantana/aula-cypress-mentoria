const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportPageTitle: 'Relatório de testes - OrangeHRM',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  retries: { runMode: 2, openMode: 0 },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
