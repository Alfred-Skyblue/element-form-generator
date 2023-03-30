<template>
  <GLayout>
    <template #header>
      <el-text size="large">表单设计器</el-text>
    </template>
    <template #list>
      <ComponentList></ComponentList>
    </template>
  </GLayout>
</template>

<script lang="ts" setup name="App">
import GLayout from '@/layouts/index.vue'
</script>
