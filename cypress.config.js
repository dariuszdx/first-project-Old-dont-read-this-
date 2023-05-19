const { defineConfig } = require('cypress')

module.exports = defineConfig({
  includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  theme: 'dark',
  reporter: 'cypress-multi-reporters',
  email: 'dariusz.dulemba@gmail.com',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://automationpractice.pl/index.php',
    supportFile: false,
    testIsolation: false
  }
})
