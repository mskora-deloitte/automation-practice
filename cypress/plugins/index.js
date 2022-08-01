/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports(on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
// }

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
}