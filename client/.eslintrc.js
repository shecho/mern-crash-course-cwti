module.exports = {
  parser: '@typescript-eslint/parser',
  env: { es6: true, jest: true, browser: true },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['prettier', 'react', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 0,

    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    semi: ['error', 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
}
