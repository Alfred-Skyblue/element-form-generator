<template>
  <div>
    <GBaseProps></GBaseProps>
    <el-form-item label="最小值">
      <el-input-number
        placeholder="最小值"
        v-model="currentItem.props.min"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number
        placeholder="最大值"
        v-model="currentItem.props.max"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number
        placeholder="1"
        v-model="currentItem.props.step"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="精度">
      <el-input-number
        placeholder="精度"
        v-model="currentItem.props.precision"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="能否清空">
      <el-switch v-model="currentItem.props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="是否只读">
      <el-switch v-model="currentItem.props.readonly"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="currentItem.props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch v-model="currentItem.required"></el-switch>
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

defineOptions({ name: 'GInputNumberProps' })

const { currentItem } = toRefs(useFormConfig())
</script>
