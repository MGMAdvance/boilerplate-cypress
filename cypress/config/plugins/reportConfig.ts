type IConfig = {
  browserName: string
  browserVersion: string
  osName: string
  osVersion: string
  config: {
    retries: {
      runMode: number
      openMode: number
    }
  }
}

const reportConfig = {
  jsonDir: 'cypress/reports/cucumber-json/',
  reportPath: 'cypress/reports/html-report',
  staticFilePath: true,
  openReportInBrowser: true,
  saveCollectedJSON: true,
  disableLog: true,
  pageTitle: 'Workshop',
  reportName: 'report_workshop',
  displayDuration: true,
  durationInMS: true,
  displayReportTime: true,
  useCDN: true,
  customMetadata: false,
  metadata: {
    browser: {
      name: 'chrome',
      version: '60',
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
        value: 'Cypress',
      },
      {
        label: 'QA(s):',
        value:
          '<a href="mailto:exemplo@exemplo.com">Andrey Oliveira</a><br /> <a href="mailto:exemplo@exemplo.com">Jonathan Daflon</a><br /> <a href="mailto:exemplo@exemplo.com">Matheus Gonçalves</a>',
      },
      {
        label: 'Data:',
        value: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
      },
    ],
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getConfigs(params: IConfig): any {
  reportConfig.metadata.browser.name = params.browserName
  reportConfig.metadata.browser.version = params.browserVersion
  reportConfig.metadata.platform.name = 'windows'
  reportConfig.metadata.platform.version = params.osVersion
  reportConfig.metadata.retries = params.config.retries.runMode

  return reportConfig
}
