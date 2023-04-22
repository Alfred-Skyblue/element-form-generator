<template>
  <el-form-item label="标题">
    <el-input v-model="currentItem.label"></el-input>
  </el-form-item>
  <el-form-item label="字段">
    <el-input v-model="currentItem.field"></el-input>
  </el-form-item>
  <el-form-item label="占位符">
    <el-input
      placeholder="请输入占位符"
      v-model="currentItem.props.placeholder"
    ></el-input>
  </el-form-item>
  <el-form-item label="栅格数">
    <el-slider v-model="currentItem.span" :marks="marks" :min="0" :max="24" />
  </el-form-item>
  <el-form-item label="标签宽度">
    <el-input-number v-model="currentItem.labelWidth"></el-input-number>
  </el-form-item>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

defineOptions({ name: 'GBaseProps' })
const { currentItem } = useFormConfig()
const marks = reactive({
  12: {}
})
</script>
