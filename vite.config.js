import { defineConfig } from "vite";
import env from "vite-plugin-env-compatible";
import { resolve } from "path";

export default defineConfig({
  plugins: [env()],
  css: {
    postcss: {},
    include: ["style.css"],
    build: {
      outDir: "dist",
      assetsInlineLimit: 0,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          index: resolve(__dirname, "index.js"),
        },
      },
    },
  },
});
