export default {
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
  customMetadata: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '93',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Informações Adicionais',
    data: [
      {
        label: 'Projeto',
        value: 'Workshop',
      },
      {
        label: 'QA',
        value: 'Andrey Oliveira',
      },
      {
        label: 'QA',
        value: 'Jonathan Daflon',
      },
      {
        label: 'QA',
        value: 'Matheus Gonçalves',
      },
      {
        label: 'Data',
        value: `${new Date().toLocaleDateString()}`,
      },
    ],
  },
}
