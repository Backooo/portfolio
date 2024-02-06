import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG/*.SVG/*.JPG/*.JPEG/*.GIF/*.png/*.svg/*.jpg/*.jpeg/*.gif"],
  base: "https://backooo.github.io/portfolio/",
})
