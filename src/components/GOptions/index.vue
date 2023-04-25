<template>
  <div class="pl-20">
    <el-divider content-position="left">选项</el-divider>
    <el-space
      class="mt-10"
      v-for="(option, index) in options"
      :key="option.value"
    >
      <el-input v-model="option.label"></el-input>
      <el-input v-model="option.value"></el-input>
      <span class="cursor-pointer" @click="handleRemove(index)">
        <g-icon type="delete"></g-icon>
      </span>
    </el-space>
    <el-button type="primary" class="mt-10" @click="handleClick">
      添加选项
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { remove } from 'lodash-es'
import { useFormConfig } from '@/store'

const { currentItem } = toRefs(useFormConfig())

const options = computed(() => {
  return currentItem.value.props.options
})
function handleClick() {
  const len = options.value.length
  options.value.push({
    label: `选项${len + 1}`,
    value: `value${len + 1}`
  })
}

function handleRemove(index: number) {
  remove(options.value, (item, i) => i === index)
}
</script>

<style scoped></style>
