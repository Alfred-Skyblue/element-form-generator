export type IAnyObject = Record<string, any>

/**
 * 表单属性类型定义
 */
export interface IFormAttributes {
  // 表单绑定的数据模型
  model: object
  // 表单的校验规则
  rules?: object
  // 表单标签的宽度
  labelWidth?: string | number
  // 标签的位置
  labelPosition?: 'top' | 'left' | 'right'
  // 标签的后缀
  labelSuffix?: string
  // 是否使用内联表单布局
  inline?: boolean
  // 是否隐藏必填字段的星号
  hideRequiredAsterisk?: boolean
  // 星号的位置
  requireAsteriskPosition?: 'left' | 'right'
  // 是否显示表单验证错误信息
  showMessage?: boolean
  // 是否使用内联错误信息布局
  inlineMessage?: boolean
  // 是否显示验证状态图标
  statusIcon?: boolean
  // 是否禁用表单
  disabled?: boolean
  // 表单的尺寸
  size?: 'medium' | 'small' | 'mini'
  // 在校验规则发生变化时是否进行验证
  validateOnRuleChange?: boolean
  // 在数据模型发生变化时是否进行验证
  validateOnModelChange?: boolean
  // 验证失败后是否滚动到错误处
  scrollToError?: boolean
  // 当校验有失败结果时，滚动到第一个失败的表单项目
  scrollIntoViewOptions?: boolean | object
  // 表单的自动填充类型
  autocomplete?: string
}

/**
 * 表单项属性类型定义
 */
export interface IFormItem extends IAnyObject {
  // 表单域字段名，必填
  prop?: string
  // 表单域标签
  label?: string
  // 表单项绑定的字段
  field: string
  // 表单域标签宽度
  labelWidth?: string
  // 表单组件属性
  props: IAnyObject
  // 绑定的事件列表
  on?: IAnyObject

  // 是否必填
  required?: boolean
  // 表单校验规则
  rules?: any[]
  // 表单域验证错误信息
  error?: string
  // 是否显示校验错误信息
  showMessage?: boolean
  // 是否以行内形式展示
  inlineMessage?: boolean
  // 表单项尺寸，可选值为 'medium'、'small'、'mini'
  size?: string
  // 和原生标签相同能力
  for?: string
  // 表单域验证状态，可选值为 'success'、'warning'、'error'、'validating'
  validateStatus?: '' | 'error' | 'validating' | 'success'
  // 表单项id
  _id: string
  // 表单组件名
  tag: string
  // 表单配置组件
  _config?: string
  // 表单栅格数
  span?: number
  // 表单项的插槽
  _slots?: IAnyObject
}

export interface IFormGenerator {
  formProps: IFormAttributes
  formItems: IFormItem[]
  currentItem: IFormItem
}
