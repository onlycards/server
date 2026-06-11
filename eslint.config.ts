import js from '@eslint/js'
import globals from 'globals'
import ts from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import { importX } from 'eslint-plugin-import-x'
import prettierConfig from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['**/dist/', '**/node_modules/']),
  {
    extends: [js.configs.recommended, ts.configs.recommended],
    plugins: {
      prettier,
      perfectionist,
      import: importX,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
  },
  {
    // common
    rules: {
      'require-await': 2,
      'no-return-await': 2,
      'prefer-template': 2,
      'object-shorthand': 2,
      'arrow-body-style': 2,
      '@typescript-eslint/no-non-null-assertion': 2,
    },
  },
  {
    // prettier
    rules: {
      'prettier/prettier': 2,
    },
  },
  {
    // import
    rules: {
      'import/first': 2,
      'import/newline-after-import': 2,
    },
  },
  {
    // perfectionist
    rules: {
      'perfectionist/sort-objects': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-exports': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-jsx-props': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-interfaces': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-object-types': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-imports': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-exports': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        2,
        {
          order: 'asc',
          newlinesBetween: 1,
          type: 'line-length',
          groups: [
            ['type-builtin', 'value-builtin'],
            ['type-external', 'value-external'],
            ['type-internal', 'value-internal', 'tsconfig-path'],
            [
              'type-parent',
              'type-index',
              'value-index',
              'type-sibling',
              'value-parent',
              'value-sibling',
            ],
          ],
        },
      ],
    },
  },
  prettierConfig,
  {
    // formatting fix
    rules: {
      curly: 2,
    },
  },
)
