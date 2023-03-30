import type { IAnyObject } from '@/types'

export interface IGFormItemConfig extends IAnyObject {
  type: string
  label: string
  key: string
  props?: IAnyObject
  placeholder?: string
  span?: number
}

export class GFormItem {
  public data!: IGFormItemConfig
  constructor(config: IGFormItemConfig) {
    const { props = {} } = config
    this.data = { ...config, props }
  }

  init() {}
}
