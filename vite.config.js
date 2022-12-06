import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", //輸出到docs
    // emptyOutDir: true,

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },

        chunkFileNames: "assets/js/[name]-[hash].js",

        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  base: "/", //資源路徑改為相對
  server: {
    host: "0.0.0.0",
    port: 9007,
  },
});
