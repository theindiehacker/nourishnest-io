module.exports = {
  extends: [
    'next',
    'prettier',
    'next/babel',
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', 'react-hooks', 'react'],
  settings: {
    next: {
      rootDir: ['apps/*/**', 'packages/*/**'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['error'],
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-irregular-whitespace': 'error',
    'no-trailing-spaces': 'error',
    semi: 'error',
    'no-empty-function': 'error',
    'no-duplicate-imports': 'error',
    'newline-after-var': 'error',
    camelcase: 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
