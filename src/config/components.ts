import type { IAnyObject } from '@/types'

export interface IComponent extends IAnyObject {
  label: string
  tag: string
  icon: string
}

export const inputComponents: IComponent[] = [
  {
    label: '单行文本',
    tag: 'el-input',
    icon: 'input',
    props: {
      placeholder: '请输入'
    }
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
    }
  },
  {
    label: '密码',
    tag: 'el-input',
    icon: 'input',
    props: {
      type: 'password',
      placeholder: '请输入'
    }
  },
  {
    label: '数字输入',
    tag: 'el-input-number',
    icon: 'input',
    props: {
      type: 'password',
      placeholder: '请输入'
    }
  }
]
