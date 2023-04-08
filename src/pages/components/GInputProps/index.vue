<template>
  <div>
    <el-form-item label="标题">
      <el-input v-model="currentItem.label" @input="input"></el-input>
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

defineOptions({ name: 'GInputProps' })

const { currentItem, formItems, formConfig } = toRefs(useFormConfig())

function input() {
  const current = formItems.value.find(item => {
    console.log('-> item', item)
    console.log('-> currentItem', currentItem.value)
    console.log('-> res', item === currentItem.value)
    console.log('-> formConfig', item === formConfig.value.currentItem)

    return item === currentItem.value
  })
  console.log('-> current', current)
}

onMounted(() => {
  input()
})
</script>
