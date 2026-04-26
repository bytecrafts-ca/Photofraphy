import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        work: resolve(__dirname, "work.html"),
        pricing: resolve(__dirname, "pricing.html"),
        visit: resolve(__dirname, "visit.html"),
      },
    },
  },
});
