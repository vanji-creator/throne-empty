import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' so the built dist/ works when served from any path (static export)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
