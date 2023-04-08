<template>
  <el-form class="h-full" v-bind="formProps">
    <el-row class="cursor-move h-50px rounded p-3 h-full">
      <VueDraggable
        v-model="formItems"
        :animation="150"
        group="form-generator"
        ghostClass="ghost"
        class="w-full h-full overflow-auto"
        @add="handleAdd"
      >
        <el-col
          class="form-item min-h-36 relative p-8 overflow-hidden"
          v-for="(item, index) in formItems"
          :span="24"
          :key="item._id"
          :class="{ active: currentItem?._id === item._id }"
          @click="handleSelect(item)"
        >
          <LayoutItem :item="item" :index="index" />
        </el-col>
      </VueDraggable>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup name="FormDesign">
import LayoutItem from '@/pages/home/components/FormDesign/components/LayoutItem.vue'
import { useFormConfig } from '@/store'
import { VueDraggable } from 'vue-draggable-plus'

const { handleSelect, currentItem, formItems, formProps } = toRefs(
  useFormConfig()
)

function handleAdd(e: any) {
  nextTick(() => {
    const newItem = formItems.value[e.newIndex]
    handleSelect(newItem)
  })
}
</script>

<style lang="scss" scoped>
.active,
.form-item:hover {
  background-color: var(--hover-color);
}
</style>
