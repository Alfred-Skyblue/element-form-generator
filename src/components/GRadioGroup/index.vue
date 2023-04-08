<template>
  <el-radio-group v-model="value" size="small" v-bind="$attrs">
    <el-radio-button
      v-for="option in options"
      :key="option.value"
      :label="option.value"
    >
      {{ option.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts" setup>
defineOptions({ name: 'GRadioGroup' })
const props = defineProps<{
  modelValue?: string
  options: { label: string; value: string }[]
}>()

const value = useVModel(props, 'modelValue')
</script>
