import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import airbnbConfig from 'eslint-config-airbnb-base';

export default [
  js.configs.recommended, // ESLint's recommended rules
  airbnbConfig, // Airbnb Base configuration
  prettierConfig, // Prettier configuration
  {
    files: ['**/*.js'], // Apply these rules to JavaScript files
    plugins: {
      prettier: {
        rules: {
          'prettier/prettier': 'error', // Enforce Prettier formatting
        },
      },
    },
    rules: {
      'spaced-comment': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }],
      'no-undef': 'error',
    },
  },
];
