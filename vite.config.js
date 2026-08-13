import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'portfolio-site'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
