import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
      },
      manifest: {
        name: '中華奧林匹克委會賀卡',
        short_name: '奧委會賀卡',
        description: '點擊圖片製作你的賀卡，立馬動手寫吧，中華奧會幫你送祝福！',
        theme_color: '#2474ce',
        icons: [
          {
            src: 'image/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        display: 'fullscreen',
        start_url: '/',
        id: '/',
      },
    }),],
  build:{
    outDir:'docs',   //輸出到docs
    // assetsDir:'assets'
  },
  base: './',  //資源路徑改為相對
  server: {
    host: '0.0.0.0',
    port: 9007,
  },
})