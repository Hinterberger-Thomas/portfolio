//@ts-ignore
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      //@ts-ignore
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(),WindiCSS(),]
})
