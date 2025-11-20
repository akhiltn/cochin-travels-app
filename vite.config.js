
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cochin-travels-app/',   // <-- MATCH YOUR REPO NAME
  plugins: [react()],
})
