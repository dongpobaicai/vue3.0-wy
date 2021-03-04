import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const pathResolve = function(dist: String) {
  return path.resolve(__dirname, '.', dist)
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        // /@/xxxx  =>  src/xxx
        find: /^\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  plugins: [vue()]
})
