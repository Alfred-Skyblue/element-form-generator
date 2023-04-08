<template>
  <el-collapse>
    <el-collapse-item>
      <template #title>
        <span class="ml-10">输入组件</span>
      </template>
      <VueDraggable
        class="grid grid-cols-2 gap-4 p-5"
        v-model="inputs"
        tag="ul"
        :group="{ name: 'form-generator', pull: 'clone', put: false }"
        :clone="clone"
        :sort="false"
      >
        <component-item
          v-for="(item, index) of inputs"
          :key="index"
          :item="item"
        />
      </VueDraggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import ComponentItem from '@/pages/home/components/ComponentList/components/ComponentItem.vue'
import { inputComponents } from '@/config/components'
import type { IFormItem } from '@/types'
import { generateUUID } from '@/utils'
import { cloneDeep } from 'lodash-es'
import { VueDraggable } from 'vue-draggable-plus'
defineOptions({
  name: 'ComponentList'
})
const inputs = ref(cloneDeep(inputComponents))

function clone(element: IFormItem) {
  const newElement = cloneDeep(element)
  return { ...newElement, _id: generateUUID() }
}
</script>
