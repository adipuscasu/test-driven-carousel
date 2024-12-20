import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const viteConfig = defineViteConfig({
  plugins: [react()],
});
const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["test-setup.ts"],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
