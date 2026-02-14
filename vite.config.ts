import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/cat-image': {
        target: 'https://cdn.rescuegroups.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/cat-image/, ''),
      },
    },
  },
})
