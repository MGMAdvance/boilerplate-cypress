import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })
const dotenvPlugin = require('cypress-dotenv')

import cucumber from "cypress-cucumber-preprocessor"
import * as browserify from '@cypress/browserify-preprocessor'
import * as resolve from 'resolve'
// const report = require("multiple-cucumber-html-reporter")

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  config = dotenvPlugin(config)

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
  }

  options.browserifyOptions.plugin.unshift(['tsify', { project: config.projectRoot }]);

  on('file:preprocessor', cucumber(options))

  return config
}
