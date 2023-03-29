import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { vitePlugins } from './build/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
