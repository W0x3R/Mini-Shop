import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  { ignores: ["dist", "node_modules"] },

  // базовые правила JS
  js.configs.recommended,
  prettierConfig,

  // Node файлы (webpack, eslint config)
  {
    files: ["webpack.config.js", "eslint.config.js"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
  },

  // React / Browser
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      prettier,
    },

    settings: {
      react: { version: "detect" },
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@app", "./src/app"],
            ["@features", "./src/features"],
            ["@utils", "./src/utils"],
            ["@layout", "./src/layout"],
            ["@pages", "./src/pages"],
            ["@assets", "./src/assets"],
            ["@shared", "./src/shared"],
          ],
          extensions: [".js", ".jsx"],
        },
        webpack: {
          config: "webpack.config.js",
        },
      },
    },

    rules: {
      // React
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Prettier интеграция
      "prettier/prettier": [
        "error",
        { endOfLine: "auto" } // важно для Windows CRLF
      ],

      // импорты
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/no-unresolved": ["error", { ignore: ["\\?url$"] }],
      "import/order": "off",

      // React настройки
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-refresh/only-export-components": "off",
    },
  },
];