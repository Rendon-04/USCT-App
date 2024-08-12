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
      "/submit_practice_test": {
        target: "http://localhost:6060",
        changeOrigin: true,
      },
        "/view_scores": {
        target: "http://localhost:6060",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:6060",
        changeOrigin: true,
      },
    },
  },
});


