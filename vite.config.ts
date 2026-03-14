import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/myportfolio/',  // 👈 yeh line add karo
  plugins: [react()],
})
