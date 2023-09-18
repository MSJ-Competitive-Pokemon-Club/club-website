import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      $fonts: resolve('./public/assets/fonts'),
      $images: resolve('./public/assets/images'),
      $ldesc: resolve('./public/assets/lesson-desc'),
      $lreplay: resolve('./public/assets/lesson-replays'),
      $text: resolve('./public/assets/text')
    }
  }
})
