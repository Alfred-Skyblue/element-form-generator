<template>
  <div>
    <GBaseProps></GBaseProps>

    <el-form-item label="多选">
      <el-checkbox v-model="currentItem.props.multiple"></el-checkbox>
    </el-form-item>
    <el-form-item label="禁用">
      <el-checkbox v-model="currentItem.props.disabled"></el-checkbox>
    </el-form-item>
    <el-form-item label="可清空">
      <el-checkbox v-model="currentItem.props.clearable"></el-checkbox>
    </el-form-item>
    <el-form-item label="可筛选">
      <el-checkbox v-model="currentItem.props.filterable"></el-checkbox>
    </el-form-item>
    <el-form-item label="可清空">
      <el-checkbox v-model="currentItem.props.clearable"></el-checkbox>
    </el-form-item>
    <g-options></g-options>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

defineOptions({ name: 'GSelectProps' })
const { currentItem } = toRefs(useFormConfig())
</script>

<style scoped></style>
