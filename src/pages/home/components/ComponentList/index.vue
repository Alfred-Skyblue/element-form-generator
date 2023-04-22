<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">
      <template #title>
        <span class="ml-10">普通组件</span>
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
import { basicComponents } from '@/config/components'
import { useFormConfig } from '@/store'
import { cloneDeep } from 'lodash-es'
import { VueDraggable } from 'vue-draggable-plus'
defineOptions({
  name: 'ComponentList'
})
const inputs = ref(cloneDeep(basicComponents))

const { clone } = useFormConfig()

const activeNames = ref(['1'])
</script>
