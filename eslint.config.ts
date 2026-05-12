import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginCypress from "eslint-plugin-cypress";
import prettier from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";

export default defineConfigWithVueTs(
  {
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "env.d.ts"]),
  eslint.configs.recommended,
  vueTsConfigs.strictTypeChecked,
  pluginVue.configs["flat/recommended"],
  unicorn.configs.recommended,
  prettier,
  {
    files: ["**/*.vue"],
    rules: {
      "unicorn/filename-case": [
        "error",
        {
          case: "pascalCase",
        },
      ],
    },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  {
    ...pluginCypress.configs.recommended,
    files: [
      "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
      "cypress/support/**/*.{js,ts,jsx,tsx}",
    ],
    rules: {
      "unicorn/prevent-abbreviations": [
        "error",
        {
          ignore: ["e2e$", /^ignore/i],
        },
      ],
    },
  },
);
