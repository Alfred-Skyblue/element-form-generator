import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import DefineOptions from 'unplugin-vue-define-options/vite'
import type { PluginOption } from 'vite'

export function vitePlugins(): PluginOption[] {
  return [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    DefineOptions(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', '@vueuse/core'],
      dts: 'auto-import/auto-imports.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: 'auto-import/.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      exclude: ['src/components/**/components/**'],
      dirs: ['src/components'],
      dts: 'src/typings/components.d.ts'
    })
  ]
}
