export type IConfig = {
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
