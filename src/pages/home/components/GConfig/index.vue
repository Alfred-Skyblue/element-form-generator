<template>
  <el-tabs model-value="form" class="config-panel">
    <el-tab-pane class="px-20" label="表单配置" name="form">
      <GFormConfig></GFormConfig>
    </el-tab-pane>
    <el-tab-pane class="px-20" label="组件配置" name="component">
      <GComponentProps></GComponentProps>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup name="GConfig">
import GFormConfig from '@/pages/components/GFormConfig/index.vue'
</script>

<style lang="scss" scoped>
.config-panel {
  ::v-deep(.el-tabs__nav) {
    width: 100% !important;
    .el-tabs__item {
      width: 50% !important;
      text-align: center;
      padding: 0 !important;
    }
  }
}
</style>
