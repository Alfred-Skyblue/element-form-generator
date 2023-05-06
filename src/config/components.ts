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
      placeholder: '请选择',
      options: [
        {
          label: '选项一',
          value: 'value1'
        }
      ]
    },
    _config: 'GSelectProps'
  },
  {
    label: '树形选择',
    tag: 'el-tree-select',
    icon: 'tree-select',
    props: {
      placeholder: '请选择',
      options: [
        {
          label: '选项一',
          value: 'value1',
          children: [
            {
              label: '选项一-1',
              value: 'value1-1'
            }
          ]
        }
      ]
    },
    _config: 'GTreeSelectProps'
  },
  {
    label: '级联选择',
    tag: 'el-cascader',
    icon: 'cascader',
    props: {
      placeholder: '请选择',
      options: [
        {
          label: '选项一',
          value: 'value1',
          children: [
            {
              label: '选项一-1',
              value: 'value1-1'
            }
          ]
        }
      ]
    },
    _config: 'GCascaderProps'
  },
  {
    label: '日期选择',
    tag: 'el-date-picker',
    icon: 'date-picker',
    props: {
      placeholder: '请选择日期'
    },
    _config: 'GDatePickerProps'
  },
  {
    label: '日期范围',
    tag: 'el-date-picker',
    icon: 'date-picker',
    props: {
      startPlaceholder: '请选择起始日期',
      endPlaceholder: '请选择结束日期',
      type: 'daterange'
    },
    _config: 'GCascaderProps'
  },
  {
    label: '时间选择',
    tag: 'el-date-picker',
    icon: 'time-picker',
    props: {
      placeholder: '请选择时间',
      type: 'datetime'
    },
    _config: 'GCascaderProps'
  },
  {
    label: '时间范围',
    tag: 'el-date-picker',
    icon: 'time-picker',
    props: {
      placeholder: '请选择时间',
      type: 'datetimerange'
    },
    _config: 'GCascaderProps'
  },
  {
    label: '复选框',
    tag: 'el-checkbox',
    icon: 'checkbox',
    props: {},
    _config: 'GCascaderProps'
  },
  {
    label: '复选框组',
    tag: 'el-checkbox-group',
    icon: 'checkbox',
    props: {
      options: [
        {
          label: '选项一',
          value: 'value1'
        },
        {
          label: '选项二',
          value: 'value2'
        }
      ]
    },
    _config: 'GCascaderProps'
  },
  {
    label: '单选框',
    tag: 'el-radio',
    icon: 'radio',
    props: {
      options: [
        {
          label: '选项一',
          value: 'value1'
        },
        {
          label: '选项二',
          value: 'value2'
        }
      ]
    },
    _config: 'GCascaderProps'
  },
  {
    label: '评分',
    tag: 'el-rate',
    icon: 'rate',
    props: {},
    _config: 'GCascaderProps'
  },
  {
    label: '颜色选择',
    tag: 'el-color-picker',
    icon: 'color',
    props: {},
    _config: 'GCascaderProps'
  },
  {
    label: '开关',
    tag: 'el-switch',
    icon: 'switch',
    props: {},
    _config: 'GCascaderProps'
  },
  {
    label: '滑块',
    tag: 'el-slider',
    icon: 'slider',
    props: {},
    _config: 'GCascaderProps'
  },
  {
    label: '上传',
    tag: 'el-upload',
    icon: 'upload',
    props: {},
    _config: 'GCascaderProps'
  }
]
