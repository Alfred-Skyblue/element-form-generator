import { baseAttrs } from '@/config/components'
import { useFormLocalStorage } from '@/hooks/useFormLocalStorage'
import type { IFormAttributes, IFormGenerator, IFormItem } from '@/types'
import { generateUUID } from '@/utils'
import { cloneDeep } from 'lodash-es'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'

export const useFormConfig = defineStore('form-config', () => {
  // @ts-ignore
  const formConfig: Ref<IFormGenerator> = useFormLocalStorage({
    formProps: { model: {}, labelWidth: 80 },
    formItems: [],
    currentItem: null
  })

  /**
   * 当前编辑的表单项
   * @type {IFormItem}
   */
  const currentItem = computed({
    get() {
      return formConfig.value.currentItem
    },
    set(value: IFormItem) {
      formConfig.value.currentItem = value
    }
  })

  const formItems = computed({
    get() {
      return formConfig.value.formItems
    },
    set(value: IFormItem[]) {
      formConfig.value.formItems = value
    }
  })

  const formProps = computed({
    get() {
      return formConfig.value.formProps
    },
    set(value: IFormAttributes) {
      formConfig.value.formProps = value
    }
  })

  function remove(id: string) {
    const index = formConfig.value.formItems.findIndex(item => item._id === id)
    if (index !== -1) {
      formConfig.value.formItems.splice(index, 1)
      handleSelect(
        formConfig.value.formItems[index] ||
          formConfig.value.formItems[index - 1]
      )
    }
  }
  /**
   * 选择表单项
   * @param {IFormItem} item
   */
  function handleSelect(item: IFormItem) {
    formConfig.value.currentItem = item
  }

  /**
   * 清空表单
   */
  function clear() {
    formConfig.value.formItems = []
    // @ts-ignore
    formConfig.value.currentItem = null
  }

  /**
   * 克隆表单项
   * @param {IFormItem} element
   * @returns {any}
   */
  function clone(element: IFormItem) {
    const newElement = cloneDeep(element)
    const _id = generateUUID()
    const field = _id.split('-')[0]
    return { ...newElement, ...baseAttrs, _id, field }
  }

  /**
   * 添加表单项
   * @param {IFormItem} item
   */
  function addFormItem(item: IFormItem) {
    const newItem = clone(item)
    formConfig.value.formItems.push(newItem)
    handleSelect(newItem)
  }

  return {
    currentItem,
    formConfig,
    handleSelect,
    clear,
    clone,
    remove,
    addFormItem,
    formItems,
    formProps
  }
})
