import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    minify: 'esbuild',
    target: 'es2015',
    cssMinify: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
})
