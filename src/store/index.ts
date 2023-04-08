import type { IFormAttributes, IFormGenerator, IFormItem } from '@/types'
import { generateUUID } from '@/utils'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
const LOCAL_KEY = 'form-generator-config'

export const useFormConfig = defineStore('form-config', () => {
  // @ts-ignore
  const formConfig: Ref<IFormGenerator> = ref({
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
    const curItem = formConfig.value.formItems.find(c => c._id === item._id)
    Promise.resolve()
      .then(() => {
        formConfig.value.currentItem = curItem!
      })
      .then(() => {
        console.log('curItem', formConfig.value.currentItem === curItem)
      })
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
   * 添加表单项
   * @param {IFormItem} item
   */
  function addFormItem(item: IFormItem) {
    const newItem = {
      ...item,
      _id: generateUUID()
    }
    formConfig.value.formItems.push(newItem)
    handleSelect(newItem)
  }

  return {
    currentItem,
    formConfig,
    handleSelect,
    clear,
    remove,
    addFormItem,
    formItems,
    formProps
  }
})
