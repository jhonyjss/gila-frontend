import path from "path";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      reporter: ["text", "json", "html"]
    }
  },
  resolve: {
    alias: [
      {
        find: "@repository",
        replacement: path.resolve(__dirname, "./src/api/repository")
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components")
      }
    ]
  }
});
