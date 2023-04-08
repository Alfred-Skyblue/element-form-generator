<template>
  <div v-for="formItem of formItems" :key="formItem.key">
    <el-form-item :label="formItem.label">
      <component
        :is="formItem.tag"
        v-model="data[formItem.key]"
        v-bind="formItem.props || {}"
        v-on="formItem.on || {}"
      ></component>
    </el-form-item>
  </div>
</template>

<script lang="ts" setup name="GFormBuilder">
import GRadioGroup from '../GRadioGroup/index.vue'

import type { IAnyObject } from '@/types'

interface IFormBuilderOptions {
  label: string
  key: string
  tag: string
  placeholder?: string
  props?: IAnyObject
  on?: Record<string, (...args: any[]) => any>
}
interface IProps {
  formItems: IFormBuilderOptions[]
  modelValue: IAnyObject
}
const props = defineProps<IProps>()

const data = useVModel(props, 'modelValue')
</script>
