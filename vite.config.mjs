import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',               // <- ROOT base for custom domain
  plugins: [react()],
})
