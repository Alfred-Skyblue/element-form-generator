import type { IFormItem } from '@/types'
import { omitBy } from 'lodash-es'

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * 提取表单项的属性
 * @param {IFormItem} item
 * @returns {any}
 */
export function pickFormItemProps(item: IFormItem) {
  const reg = /^(field|props|_id|tag|_config|span|icon)/
  return omitBy(item, (value, key) => reg.test(key))
}
