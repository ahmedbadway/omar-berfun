import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves 404.html for any path it can't find on disk.
// Copying the built index.html to 404.html makes client-side routes
// (e.g. /omar-berfun/shop) and page refreshes load the SPA instead of GitHub's 404.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/omar-berfun/',
})
