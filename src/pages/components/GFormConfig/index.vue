<template>
  <div>
    <g-form-builder
      :form-items="formItems"
      v-model="formProps"
    ></g-form-builder>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'
defineOptions({ name: 'GFormConfig' })
const { formProps } = toRefs(useFormConfig())
const formItems = ref([
  {
    tag: 'g-radio-group',
    label: '行内模式',
    key: 'labelPosition',
    props: {
      options: [
        { label: '左对齐', value: 'left' },
        { label: '右对齐', value: 'right' },
        { label: '顶对齐', value: 'top' }
      ]
    }
  },
  {
    tag: 'g-radio-group',
    label: '表单尺寸',
    key: 'size',
    props: {
      options: [
        { label: 'large', value: 'large' },
        { label: 'default', value: 'default' },
        { label: 'small', value: 'small' }
      ]
    }
  },
  {
    tag: 'el-input-number',
    label: '标签宽度',
    key: 'labelWidth'
  },
  {
    tag: 'el-switch',
    label: '禁用表单',
    key: 'disabled'
  },
  {
    tag: 'el-switch',
    label: '隐藏必选星号',
    key: 'hideRequiredAsterisk'
  }
])
</script>
