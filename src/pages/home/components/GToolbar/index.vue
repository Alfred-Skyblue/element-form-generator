<template>
  <div class="flex gap-8">
    <a
      v-for="item of actions"
      :key="item.type"
      class="cursor-pointer"
      @click="item.handler"
    >
      <g-icon :type="item.type"></g-icon>
    </a>
  </div>
</template>
<script lang="ts" setup name="GToolbar">
import { useFormConfig } from '@/store'

const { clear } = useFormConfig()
const actions = [
  {
    type: 'undo',
    label: '撤销',
    handler() {
      console.log('撤销')
    }
  },
  {
    type: 'redo',
    label: '重做',
    handler() {
      console.log('重做')
    }
  },
  {
    type: 'delete',
    label: '清空',
    handler() {
      clear()
    }
  }
]
</script>
