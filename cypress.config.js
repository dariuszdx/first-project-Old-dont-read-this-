const { defineConfig } = require('cypress');

module.exports = defineConfig(Object.assign(
  {
    reporterEnabled: 'spec, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/results-[hash].xml',
    },
  },
  {
    includeShadowDom: true,
    chromeWebSecurity: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    theme: 'dark',
    reporter: 'cypress-multi-reporters',
    email: 'dariusz.dulemba@gmail.com',
    e2e: {
      setupNodeEvents(on, config) { },
      baseUrl: 'http://www.automationpractice.pl/index.php?',
      supportFile: false,
      testIsolation: false,
    },
  }
));