import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cochin-travels-app/', // adjust if repo name differs
  plugins: [react()],
})
