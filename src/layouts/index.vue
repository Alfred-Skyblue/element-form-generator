<template>
  <div class="common-layout bg-red-500 h-screen">
    <el-container class="h-full w-full">
      <!--<editor-fold desc="顶部区域">-->
      <el-header class="bg-amber-300 flex-center flex-y-center">
        <slot name="header"></slot>
      </el-header>
      <!--</editor-fold>-->

      <!--<editor-fold desc="主内容区域">-->
      <el-container class="h-full">
        <!--<editor-fold desc="左侧待拖拽组件列表">-->
        <el-aside class="h-full bg-sky-700" width="200px">
          <slot name="list">componentList</slot>
        </el-aside>
        <!--</editor-fold>-->

        <!--<editor-fold desc="设计器区域">-->
        <el-container class="h-full flex-col">
          <!--<editor-fold desc="工具栏">-->
          <div class="h-8"><slot name="toolbar"></slot></div>
          <!--</editor-fold>-->
          <!--<editor-fold desc="主内容区域默认插槽">-->
          <el-main class="bg-green-700">
            <slot></slot>
          </el-main>
          <!--</editor-fold>-->
        </el-container>
        <!--</editor-fold>-->

        <!--<editor-fold desc="右侧组件配置区域">-->
        <el-aside class="h-full bg-indigo-800" width="300px">
          <slot name="config"></slot>
        </el-aside>
        <!--</editor-fold>-->
      </el-container>
      <!--</editor-fold>-->
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>
