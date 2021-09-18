import cucumber from "cypress-cucumber-preprocessor"
// const report = require("multiple-cucumber-html-reporter")
import * as browserify from '@cypress/browserify-preprocessor'
import * as resolve from 'resolve'

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
  }
  options.browserifyOptions.plugin.unshift(['tsify', { project: config.projectRoot }]);

  on('file:preprocessor', cucumber(options))
}
