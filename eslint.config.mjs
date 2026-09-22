// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],

    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
      },
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],
  },

  {
    files: ['tests/**'],

    extends: [
      playwright.configs['flat/recommended'],
    ],

    rules: {
      // Customize Playwright rules
      // ...
    },
  },
]);