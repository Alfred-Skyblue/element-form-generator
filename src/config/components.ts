import type { IAnyObject, IFormItem } from '@/types'

export const baseAttrs = {
  span: 24,
  _slots: {}
}

export interface IComponent extends Partial<IFormItem>, IAnyObject {
  label: string
  tag: string
  icon: string
  props?: IAnyObject
}

export const basicComponents: IComponent[] = [
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
    icon: 'textarea',
    props: {
      placeholder: '请输入',
      type: 'textarea',
      autosize: {
        minRows: 4,
        maxRows: 4
      }
    },
    _config: 'GInputProps'
  },
  {
    label: '数字输入',
    tag: 'el-input-number',
    icon: 'number',
    props: {
      placeholder: '请输入'
    },
    _config: 'GInputNumberProps'
  },
  {
    label: '密码',
    tag: 'el-input',
    icon: 'password',
    props: {
      type: 'password',
      placeholder: '请输入',
      showPassword: true
    },
    _config: 'GInputProps'
  },
  {
    label: '下拉选择',
    tag: 'el-select',
    icon: 'select',
    props: {
      placeholder: '请选择'
    },
    _config: 'GSelectProps'
  }
]
