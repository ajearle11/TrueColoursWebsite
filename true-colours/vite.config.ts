import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";
import pluginChecker from "vite-plugin-checker";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.tsx",
    coverage: {
      provider: "v8", // or 'v8'
    },
  },
  plugins: [pluginChecker({ typescript: true })],
});
