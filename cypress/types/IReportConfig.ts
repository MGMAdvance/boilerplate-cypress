export type IDatum = {
  label: string
  value: string
}

export type ICustomData = {
  title: string
  data: IDatum[]
}

export type IBrowser = {
  name: string
  version: string
}

export type IMetadata = {
  browser: IBrowser
  platform: IBrowser
  retries: number
}

export type IReportConfig = {
  jsonDir: string
  reportPath: string
  staticFilePath: boolean
  openReportInBrowser: boolean
  saveCollectedJSON: boolean
  disableLog: boolean
  pageTitle: string
  reportName: string
  displayDuration: boolean
  durationInMS: boolean
  displayReportTime: boolean
  useCDN: boolean
  customMetadata: boolean
  metadata: IMetadata
  customData: ICustomData
}
