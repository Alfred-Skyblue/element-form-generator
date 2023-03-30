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
        <el-aside class="h-full border" width="260px">
          <slot name="list"></slot>
        </el-aside>
        <!--</editor-fold>-->

        <!--<editor-fold desc="设计器区域">-->
        <el-container class="h-full flex-col">
          <!--<editor-fold desc="工具栏">-->
          <div class="h-30"><slot name="toolbar"></slot></div>
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
