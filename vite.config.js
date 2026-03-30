import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    strictPort: false,
    watch: {
      usePolling: true,
      interval: 500,
      ignored: ['**/node_modules/**', '**/.git/**', '**/.gemini/**', '**/dist/**']
    },
    hmr: false
  },
  optimizeDeps: {
    force: true // Force dependency pre-bundling to bust corrupted Cache
  }
})
