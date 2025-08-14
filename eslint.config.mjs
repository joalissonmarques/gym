import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
      ...pluginQuery.configs["flat/recommended"],
      ...pluginRouter.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: { ...reactHooks.configs.recommended.rules },
  }),
];

export default eslintConfig;
