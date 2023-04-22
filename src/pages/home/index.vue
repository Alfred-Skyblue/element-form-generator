<template>
  <GLayout class="select-none">
    <template #header>
      <el-text>表单设计器</el-text>
    </template>
    <FormDesign></FormDesign>
    <template #toolbar>
      <GToolbar></GToolbar>
    </template>
    <template #config>
      <GConfig></GConfig>
    </template>
    <template #list>
      <ComponentList></ComponentList>
    </template>
  </GLayout>
</template>

<script lang="ts" setup name="App">
import GLayout from '@/layouts/index.vue'
import ComponentList from './components/ComponentList/index.vue'
import FormDesign from './components/FormDesign/index.vue'
import GToolbar from './components/GToolbar/index.vue'
import GConfig from './components/GConfig/index.vue'
</script>
