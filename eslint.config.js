import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint, { parser } from "typescript-eslint";
import { version } from "typescript";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      "eslint:recommended",
      "prettier",
      ...tseslint.configs.recommended,
      "plugin:testing-library/react",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      node: true,
      es2021: true,
    },
    overrides: [
      { files: ["*.cjs"] },
      {
        files: ["*.ts", "*.tsx"],
        extends: [
          "plugin: @typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
        plugins: ["@typescript-eslint"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: true,
          tsconfigRootDir: __dirname,
        },
      },
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    ignores: ["./dist"],
  }
);
