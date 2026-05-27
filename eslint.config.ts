import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginCypress from "eslint-plugin-cypress";
import unicorn from "eslint-plugin-unicorn";
import compat from "eslint-plugin-compat";
import prettier from "eslint-plugin-prettier/recommended";

export default defineConfigWithVueTs(
  {
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
  eslint.configs.recommended,
  vueTsConfigs.strictTypeChecked,
  pluginVue.configs["flat/recommended"],
  unicorn.configs["recommended"],
  compat.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/member-ordering": "error",
      "unicorn/prevent-abbreviations": [
        "error",
        { allowList: { e2e: true, env: true } },
      ],
    },
  },
  {
    files: ["**/*.vue"],
    rules: {
      "unicorn/filename-case": ["error", { case: "pascalCase" }],
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
  },
);
