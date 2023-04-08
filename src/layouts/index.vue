<template>
  <div class="common-layout h-screen">
    <el-container class="h-full w-full gap-y-10">
      <!--<editor-fold desc="顶部区域">-->
      <el-header class="h-40 bg-amber-300 flex-center flex-y-center">
        <slot name="header"></slot>
      </el-header>
      <!--</editor-fold>-->

      <!--<editor-fold desc="主内容区域">-->
      <el-container class="h-full gap-x-10">
        <!--<editor-fold desc="左侧待拖拽组件列表">-->
        <el-aside class="h-full shadow-container" width="260px">
          <slot name="list"></slot>
        </el-aside>
        <!--</editor-fold>-->

        <!--<editor-fold desc="设计器区域">-->
        <el-container class="h-full flex-col shadow-container">
          <!--<editor-fold desc="工具栏">-->
          <div class="px-20 h-40 g-toolbar flex-y-center">
            <slot name="toolbar"></slot>
          </div>
          <!--</editor-fold>-->
          <!--<editor-fold desc="主内容区域默认插槽">-->
          <el-main style="--el-main-padding: 0">
            <slot></slot>
          </el-main>
          <!--</editor-fold>-->
        </el-container>
        <!--</editor-fold>-->

        <!--<editor-fold desc="右侧组件配置区域">-->
        <el-aside class="h-full shadow-container" width="300px">
          <slot name="config"></slot>
        </el-aside>
        <!--</editor-fold>-->
      </el-container>
      <!--</editor-fold>-->
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.shadow-container {
  box-shadow: 0 0 1px 1px #ccc;
}
.g-toolbar {
  border-bottom: 2px solid #ccc;
}
</style>
