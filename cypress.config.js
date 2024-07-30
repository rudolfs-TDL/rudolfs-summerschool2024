const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    username: 'rudolfs.blaumanis@testdevlab.com',
    password: 'test123',
  },
  e2e: {
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
