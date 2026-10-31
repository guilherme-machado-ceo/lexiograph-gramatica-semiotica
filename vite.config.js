import { defineConfig } from 'vite'
import { resolve } from 'path'

// Domínio próprio: lexiograph-design-fullservice.hubstry.dev (servido na raiz)
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lex: resolve(__dirname, 'lex.html'),
        servicos: resolve(__dirname, 'servicos.html'),
      }
    }
  }
})