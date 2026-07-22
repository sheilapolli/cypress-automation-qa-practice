const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Definindo a URL base de forma global e sênior
    baseUrl: 'https://qa-practice.razvanvancea.ro',
    setupNodeEvents(on, config) {
      // implemente node event listeners aqui se necessário
    },
  },
});