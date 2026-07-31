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
import sonar from "eslint-plugin-sonarjs";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom-ya";
import prettier from "eslint-plugin-prettier/recommended";

export default defineConfigWithVueTs(
  {
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  globalIgnores([
    "**/dist/**",
    "**/dist-ssr/**",
    "**/coverage/**",
    "env.d.ts",
    "vitest.config.ts",
  ]),
  eslint.configs.recommended,
  vueTsConfigs.strictTypeChecked,
  pluginVue.configs["flat/recommended"],
  unicorn.configs["recommended"],
  sonar.configs.recommended,
  compat.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/member-ordering": "error",
    },
  },
  {
    files: ["**/*.vue"],
    rules: {
      "unicorn/filename-case": [
        "error",
        { case: "pascalCase", checkDirectories: false },
      ],
    },
  },
  {
    files: ["src/**/*.spec.ts"],
    ...pluginVitest.configs.recommended,
    ...testingLibrary.configs["flat/vue"],
    ...jestDom.configs["flat/recommended"],
  },
  {
    ...pluginCypress.configs.recommended,
    files: [
      "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
      "cypress/support/**/*.{js,ts,jsx,tsx}",
    ],
    rules: {},
  },
);
