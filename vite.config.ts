import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({mode}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  // https://vitejs.dev/config/
  return {
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 80,
    },
    base: process.env.BASE_PATH,
  }
})
