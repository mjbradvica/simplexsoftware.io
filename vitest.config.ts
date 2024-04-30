import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        exclude: ["src/main.tsx"],
        thresholds: {
          branches: 100,
        },
      },
      environment: "jsdom",
      globals: true,
      setupFiles: ["src/setupTests.ts"],
    },
  }),
);
