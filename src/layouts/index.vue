<template>
  <div class="common-layout bg-red-500 h-screen">
    <el-container class="h-full w-full">
      <el-header class="bg-amber-300 flex-center flex-y-center">
        <slot name="header"></slot>
      </el-header>
      <el-container class="h-full">
        <el-aside class="h-full bg-sky-700" width="200px">
          <slot name="component-list">componentList</slot>
        </el-aside>
        <el-container class="h-full flex-col">
          <div class="h-8"><slot name="toolbar"></slot></div>
          <el-main class="bg-green-700">
            <slot></slot>
          </el-main>
        </el-container>
        <el-aside class="h-full bg-indigo-800" width="300px">
          <slot name="component-config"></slot>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>
