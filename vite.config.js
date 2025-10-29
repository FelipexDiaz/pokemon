import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',       // tu repo
  build: {
    outDir: 'docs',         // Vite genera el build en /docs en lugar de /dist
  },
})