import js from '@eslint/js';
import globals from 'globals';
import * as prettier from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import("eslint/config").FlatConfig[]} */
export default await tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: {
    react,
    'react-hooks': reactHooks,
    'jsx-a11y': jsxA11y,
    import: eslintImport,
    prettier: prettierPlugin,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
    ...eslintImport.configs.recommended.rules,
    ...prettierPlugin.configs.recommended.rules,

    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  ignores: ['dist', 'node_modules'],
  extends: [js.configs.recommended, ...prettier.configs],
});
