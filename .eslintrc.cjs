module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 4],
    // 'quotes': [
    //     'error',
    //     'single'
    // ],
    'semi': [2,'always'],
    'comma-dangle': 'warn',
    camelcase: 'warn',
    'no-unused-vars': 'warn',
  },
};
