import js from '@eslint/js';
import ts from 'typescript-eslint';
export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { parserOptions: { project: ['./tsconfig.base.json', './packages/*/tsconfig.json'] } },
    rules: {
      'no-restricted-properties': [
        'error',
        { object: 'Math', property: 'random', message: 'Use shared deterministic RNG instead.' }
      ]
    }
  }
];
