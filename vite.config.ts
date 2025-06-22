import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import PrettyModuleClassnames from 'vite-plugin-pretty-module-classnames'
import sassDts from 'vite-plugin-sass-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    PrettyModuleClassnames(),
    sassDts({ enabledMode: ['development', 'production'], esmExport: true }),
  ],
})
