module.exports = {
  env: {
    browser: false,
    es2020: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': ['off']
  }
}
