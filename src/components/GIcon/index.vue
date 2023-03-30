<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${type}`"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  type: string
}>()
defineOptions({
  name: 'GIcon'
})
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
