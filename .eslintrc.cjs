module.exports = {
  env: {
      browser: true,
      es2022: true,
      node: true
  },
  settings: {
      react: {
          version: 'detect'
      }
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.eslint.json'
  },
  plugins: ['react'],
  ignorePatterns: ['vite-env.d.ts'],
  overrides: [
      {
          files: ['**/*.ts', '**/*.tsx'],
          env: {
              browser: true,
              es2022: true,
              node: false
          },
          plugins: ['react-refresh'],
          extends: [
              'eslint:recommended',
              'plugin:promise/recommended',
              'plugin:@typescript-eslint/strict-type-checked',
              'plugin:react/recommended',
              'plugin:react/jsx-runtime',
              'plugin:react-hooks/recommended',
              'plugin:@tanstack/eslint-plugin-query/recommended',
              'plugin:jsx-a11y/strict',
              'prettier'
          ],
          rules: {
              'react-refresh/only-export-components': 'warn',
              '@typescript-eslint/explicit-function-return-type': 'off',
              '@typescript-eslint/strict-boolean-expressions': 'off',
              '@typescript-eslint/no-misused-promises': [
                  'error',
                  {
                      checksVoidReturn: {
                          attributes: false
                      }
                  }
              ],
              '@typescript-eslint/ban-types': [
                  'error',
                  {
                      extendDefaults: true,
                      types: {
                          Function: {
                              message:
                                  'The `Function` type accepts any function-like value. It provides no type safety when calling the function, which can be a common source of bugs.\n It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\n If you are expecting the function to accept certain arguments, you should explicitly define the function shape.\n Avoid the use of generic type: (...args: any[]) => any'
                          },
                          Object: {
                              message:
                                  "The `Object` type actually means 'any non-nullish value', so it is marginally better than `unknown`. \n- If you want a type meaning 'any object', you probably want `Record<string, unknown>` or '{ [key: string]: unknown }' instead. \n- If you want a type meaning 'any value', you probably want `unknown` instead."
                          },
                          '{}': {
                              message:
                                  "`{}` actually means 'any non-nullish value'. \n- If you want a type meaning 'any object', you probably want `Record<string, unknown>` or '{ [key: string]: unknown }' instead. \n- If you want a type meaning 'any value', you probably want `unknown` instead."
                          }
                      }
                  }
              ],
              'no-async-promise-executor': 'error',
              'no-await-in-loop': 'error',
              'no-promise-executor-return': 'error',
              'require-atomic-updates': 'error',
              'max-nested-callbacks': ['error', 3],
              'no-return-await': 'error',
              '@typescript-eslint/await-thenable': 'error',
              '@typescript-eslint/no-floating-promises': 'error',
              '@typescript-eslint/promise-function-async': ['error'],
              'jsx-a11y/control-has-associated-label': 'error',
              'react/self-closing-comp': 'error',
              'react/button-has-type': 'error',
              'react/hook-use-state': 'error',
              'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }]
          }
      },
      {
          files: ['**/*.cy.ts'],
          env: {
              browser: true,
              'cypress/globals': true
          },
          parser: '@typescript-eslint/parser',
          plugins: ['cypress', '@typescript-eslint'],
          extends: [
              'eslint:recommended',
              'plugin:@typescript-eslint/recommended',
              'plugin:cypress/recommended',
              'prettier'
          ],
          rules: {
              'cypress/no-force': 'error',
              'no-console': ['warn']
          }
      }
  ]
};