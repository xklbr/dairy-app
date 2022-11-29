import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      api: path.resolve("src/api"),
      common: path.resolve("src/common"),
      components: path.resolve("src/components"),
      features: path.resolve("src/features"),
      layouts: path.resolve("src/layouts"),
      pages: path.resolve("src/pages"),
    },
  },
  plugins: [react()],
});
