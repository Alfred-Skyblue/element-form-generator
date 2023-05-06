<template>
  <div>
    <GBaseProps></GBaseProps>
    <el-form-item label="分隔符">
      <el-input
        v-model="currentItem.props.separator"
        placeholder="分隔符默认为 '/'"
      ></el-input>
    </el-form-item>
    <el-form-item label="展开方式">
      <el-radio-group v-model="currentItem.props.expandTrigger">
        <el-radio label="click">click</el-radio>
        <el-radio label="hover">hover</el-radio>
      </el-radio-group>
    </el-form-item>
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
    <el-form-item label="emitPath">
      <el-checkbox v-model="currentItem.props.emitPath"></el-checkbox>
    </el-form-item>
    <g-options v-model="currentItem.props.options"></g-options>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

defineOptions({ name: 'GCascaderProps' })
const { currentItem } = toRefs(useFormConfig())
</script>

<style scoped></style>
