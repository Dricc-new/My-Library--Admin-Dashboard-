import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/My-Library--Admin-Dashboard-/',
  plugins: [react()],
})
