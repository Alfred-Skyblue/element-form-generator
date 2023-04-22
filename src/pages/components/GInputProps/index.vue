<template>
  <div>
    <GBaseProps></GBaseProps>
    <el-form-item label="前缀" v-if="currentItem.props.type !== 'textarea'">
      <el-input
        placeholder="请输入前缀"
        v-model="currentItem._slots.prepend"
      ></el-input>
    </el-form-item>
    <el-form-item label="后缀" v-if="currentItem.props.type !== 'textarea'">
      <el-input
        placeholder="请输入后缀"
        v-model="currentItem._slots.append"
      ></el-input>
    </el-form-item>
    <el-form-item label="最大长度">
      <el-input-number v-model="currentItem.props.maxLength"></el-input-number>
    </el-form-item>
    <el-form-item label="最小长度">
      <el-input-number v-model="currentItem.props.minLength"></el-input-number>
    </el-form-item>

    <el-form-item label="统计字数">
      <el-switch v-model="currentItem.props.showWordLimit"></el-switch>
    </el-form-item>
    <el-form-item label="可切换">
      <el-switch v-model="currentItem.props.showPassword"></el-switch>
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

defineOptions({ name: 'GInputProps' })

const { currentItem } = toRefs(useFormConfig())
</script>
