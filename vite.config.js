import { defineConfig } from 'vite'
import { resolve } from 'path'

// Configuração para GitHub Pages subpath
export default defineConfig({
  base: '/lexiograph-gramatica-semiotica/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lex: resolve(__dirname, 'lex.html'),
      }
    }
  }
})