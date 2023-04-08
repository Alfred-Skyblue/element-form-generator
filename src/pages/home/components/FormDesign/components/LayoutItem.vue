<template>
  <div
    class="item-action absolute right-0 top-0 z-20 flex gap-4"
    v-if="currentItem?._id === item._id"
  >
    <a class="copy" @click.stop>
      <g-icon type="copy"></g-icon>
    </a>
    <a class="delete" @click.stop="remove(item._id)">
      <g-icon type="delete"></g-icon>
    </a>
  </div>
  <el-form-item :label="item.label">
    <component :is="item.tag" v-bind="item.props"></component>
  </el-form-item>
</template>
<script lang="ts" setup name="LayoutItem">
import { useFormConfig } from '@/store'
import type { IFormItem } from '@/types'

interface IProps {
  item: IFormItem
  index: number
}
defineProps<IProps>()

const { currentItem, remove } = toRefs(useFormConfig())
</script>
<style lang="scss" scoped>
.item-action {
  a {
    @apply rounded-full w-24 h-24 text-center;
  }
  .copy {
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  .delete {
    color: var(--el-color-error);
    border: 1px solid var(--el-color-error);
  }
}
</style>
