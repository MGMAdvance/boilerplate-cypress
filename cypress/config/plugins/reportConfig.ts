import * as dotenv from 'dotenv'
import { IReportConfig } from './../../types/IReportConfig'
import { IConfig } from '../../types/IConfig'

dotenv.config()

const reportConfig: IReportConfig = {
  jsonDir: 'cypress/reports/cucumber-json/',
  reportPath: 'cypress/reports/html-report',
  staticFilePath: true,
  openReportInBrowser: true,
  saveCollectedJSON: true,
  disableLog: true,
  pageTitle: 'Workshop',
  reportName: 'report_workshop',
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
  useCDN: true,
  customMetadata: false,
  metadata: {
    browser: {
      name: '',
      version: '',
    },
    platform: {
      name: '',
      version: '',
    },
    retries: 0,
  },
  customData: {
    title: 'Informações Adicionais',
    data: [
      {
        label: 'Projeto:',
        value: 'Workshop',
      },
      {
        label: 'Squad:',
        value: `${process.env.SQUAD}`,
      },
      {
        label: 'QA(s):',
        value: `<a href="mailto:${process.env.QA_EMAIL}">${process.env.QA_NAME}</a><br />`,
      },
      {
        label: 'Data:',
        value: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
      },
    ],
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getConfigs(params: IConfig): IReportConfig {
  reportConfig.metadata.browser.name = params.browserName
  reportConfig.metadata.browser.version = params.browserVersion
  reportConfig.metadata.platform.name =
    params.osName === 'win32' ? 'windows' : params.osName
  reportConfig.metadata.platform.version = params.osVersion
  reportConfig.metadata.retries = params.config.retries.runMode

  return reportConfig
}
