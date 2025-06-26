import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import readableClassnames from 'vite-plugin-readable-classnames'
import sassDts from 'vite-plugin-sass-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    readableClassnames(),
    sassDts({ enabledMode: ['development', 'production'], esmExport: true }),
  ],
})
