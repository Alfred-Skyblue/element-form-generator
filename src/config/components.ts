import type { IAnyObject, IFormItem } from '@/types'

export interface IComponent extends Partial<IFormItem>, IAnyObject {
  label: string
  tag: string
  icon: string
  props?: IAnyObject
}

export const inputComponents: IComponent[] = [
  {
    label: '单行文本',
    tag: 'el-input',
    icon: 'input',
    props: {
      placeholder: '请输入'
    },
    _config: 'GInputProps'
  },
  {
    label: '多行文本',
    tag: 'el-input',
    icon: 'input',
    props: {
      placeholder: '请输入',
      type: 'textarea',
      autosize: {
        minRows: 4,
        maxRows: 4
      }
    },
    _config: 'GTextareaProps'
  },
  {
    label: '数字输入',
    tag: 'el-input-number',
    icon: 'input',
    props: {
      placeholder: '请输入'
    },
    _config: 'GInputNumberProps'
  }
]
