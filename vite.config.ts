//@ts-ignore
import path from 'path'

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
  plugins: [vue()]
})
