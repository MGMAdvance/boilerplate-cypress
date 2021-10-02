/* eslint-disable @typescript-eslint/no-var-requires */
import reportConfig from './reportConfig'
require('dotenv').config()
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')
const browserify = require('@cypress/browserify-preprocessor')
const dotenvPlugin = require('cypress-dotenv')
const report = require('multiple-cucumber-html-reporter')

/**
 * @type {Cypress.PluginConfig}
 */

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Cypress.PluginConfigOptions => {
  config = dotenvPlugin(config)

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { basedir: config.projectRoot }),
  }

  options.browserifyOptions.plugin.unshift([
    'tsify',
    { project: config.projectRoot },
  ])

  on('file:preprocessor', cucumber(options))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on('after:run', (results: any) => {
    report.generate(reportConfig(results))
  })

  return config
}
