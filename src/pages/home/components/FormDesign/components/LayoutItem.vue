<template>
  <div
    class="item-container"
    :class="{ 'active-item': currentItem?._id === item._id }"
  >
    <div
      class="item-action absolute right-0 top-0 z-20 flex gap-4 w-60 h-30"
      v-if="currentItem?._id === item._id"
    >
      <a class="copy" @click.stop="handleCopy">
        <g-icon type="copy"></g-icon>
      </a>
      <a class="delete" @click.stop="remove(item._id)">
        <g-icon type="delete"></g-icon>
      </a>
    </div>
    <el-form-item v-bind="formItemProps" class="mt-6 !mb-0 overflow-hidden">
      <component :is="item.tag" v-bind="item.props">
        <template v-for="(value, name) in slots" v-slot:[name]="data">
          <slot :name="name" v-bind="data">
            {{ value }}
          </slot>
        </template>
      </component>
    </el-form-item>
  </div>
</template>
<script lang="ts" setup name="LayoutItem">
import { useFormConfig } from '@/store'
import type { IAnyObject, IFormItem } from '@/types'
import { pickFormItemProps } from '@/utils'
import { forEach } from 'lodash-es'

interface IProps {
  item: IFormItem
  index: number
}
const props = defineProps<IProps>()

const { currentItem, remove } = toRefs(useFormConfig())
const { addFormItem } = useFormConfig()

const formItemProps = computed(() => pickFormItemProps(props.item))
function handleCopy() {
  addFormItem(props.item)
}

const slots = computed(() => {
  const slots: IAnyObject = {}
  forEach(props.item._slots, (value, name) => {
    if (value) slots[name] = value
  })
  return slots
})
</script>
<style lang="scss" scoped>
.item-container {
  .item-action {
    background-color: var(--primary-color);
    border-radius: 0 0 0 8px !important;

    a {
      @apply rounded-full w-24 h-24 text-center;
    }
    .copy {
      right: 30px !important;
    }
    .delete {
      color: var(--el-color-error);
    }
    .copy,
    .delete {
      position: absolute;
      top: 0;
      color: #fff;
      right: 0;
      width: 30px;
      line-height: 30px;
      transition: all 0.3s;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    height: 5px;
    width: 100%;
    background-color: var(--primary-color);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    content: '';
    right: -100%;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
  }
  &.active-item {
    &::before {
      right: 0;
    }
  }
}
</style>
