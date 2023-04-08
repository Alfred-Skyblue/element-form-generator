<template>
  <li class="draggable-item truncate" @click="addFormItem(item)">
    <el-text>
      <g-icon :type="item.icon" class="mr-3" />
      <span>{{ item.label }}</span>
    </el-text>
  </li>
</template>

<script lang="ts" setup name="ComponentItem">
import type { IComponent } from '@/config/components'
import GIcon from '@/components/GIcon/index.vue'
import { useFormConfig } from '@/store'

interface Props {
  item: IComponent
}
defineProps<Props>()
const { addFormItem } = useFormConfig()
</script>

<style lang="scss" scoped>
.draggable-item {
  @apply px-12 transition-all h-36 cursor-move rounded;
  border: 1px solid #e6e6e6;
  line-height: 36px;
  &:hover {
    @apply text-primary border-primary;
    box-shadow: 0 2px 6px var(--primary-color);
  }
}
</style>
