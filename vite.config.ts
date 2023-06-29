import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@repository",
        replacement: path.resolve(__dirname, "./src/api/repository")
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src")
      }
    ]
  }
});
