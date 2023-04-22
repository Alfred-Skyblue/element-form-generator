<template>
  <el-form class="h-full" v-bind="formProps">
    <VueDraggable
      v-model="formItems"
      :animation="150"
      group="form-generator"
      ghostClass="ghost"
      class="w-full h-full overflow-auto"
      target="#draggable-container"
      @add="handleAdd"
    >
      <el-row
        id="draggable-container"
        class="cursor-move h-50px rounded p-3 h-full"
      >
        <el-col
          class="form-item min-h-36 relative p-8 overflow-hidden"
          v-for="(item, index) in formItems"
          :span="item.span"
          :key="item._id"
          :class="{ active: currentItem?._id === item._id }"
          @click="handleSelect(item)"
        >
          <LayoutItem :item="item" :index="index" />
        </el-col>
      </el-row>
    </VueDraggable>
  </el-form>
</template>

<script lang="ts" setup>
import LayoutItem from '@/pages/home/components/FormDesign/components/LayoutItem.vue'
import { useFormConfig } from '@/store'
import { VueDraggable } from 'vue-draggable-plus'

defineOptions({ name: 'FormDesign' })

const { handleSelect, currentItem, formItems, formProps } = toRefs(
  useFormConfig()
)

function handleAdd(e: { newIndex: number }) {
  nextTick(() => {
    const newItem = formItems.value[e.newIndex]
    handleSelect.value(newItem)
  })
}
</script>

<style lang="scss" scoped>
.active,
.form-item:hover {
  background-color: var(--hover-color);
}
#draggable-container {
  flex-flow: row wrap;
  align-content: flex-start;
}
.ghost {
  opacity: 0.5 !important;
}
</style>
