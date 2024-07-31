const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        username: '',
        password: '',
    },
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        baseUrl: 'https://coe-webstore.tdlbox.com/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
