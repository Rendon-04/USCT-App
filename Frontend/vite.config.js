import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/practice_test": {
        target: "http://localhost:6060",
        changeOrigin: true,
      },
    },
  },
});