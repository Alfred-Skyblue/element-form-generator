<template>
  <VLayout>
    <template #header>
      <span class="text-2xl">表单设计器</span>
    </template>
    <template #component-list>
      <ComponentList></ComponentList>
    </template>
  </VLayout>
</template>

<script lang="ts" setup name="App">
import VLayout from './layouts/index.vue'
</script>
