import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import jestPlugin from "eslint-plugin-jest";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: [
      "dist/",
      "build/",
      "coverage/",
      ".storybook/",
      "stories/",
      "node_modules/",
      "**/*.test.{ts,tsx}",
      "**/*.stories.{ts,tsx}",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  {
    files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
    ignores: ["dist/", "build/", "coverage/"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        document: "readonly",
      },
    },
    plugins: { jest: jestPlugin },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      "jest/expect-expect": "off",
    },
  },

  {
    files: ["**/*.stories.{ts,tsx}"],
    ignores: ["dist/", "build/", "coverage/"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "react/display-name": "off",
    },
  },

  {
    files: [
      ".storybook/**/*.{ts,tsx}",
      "jest.config.{ts,tsx}",
      "webpack.config.{ts,tsx}",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
      },
    },
  },

  {
    files: ["src/global.d.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
