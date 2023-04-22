<template>
  <div>
    <el-form label-width="80">
      <component
        v-if="currentItem"
        :is="currentItem._config"
        v-model="currentItem.props"
      ></component>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useFormConfig } from '@/store'

const { currentItem } = toRefs(useFormConfig())

defineOptions({ name: 'GComponentProps' })
</script>
