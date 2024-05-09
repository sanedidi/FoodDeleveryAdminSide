module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
        ]
      }
    }
  },
  plugins: ['react-refresh'],
  rules: {
    "indent": ["warn", 2, { "ignoredNodes": ["ConditionalExpression", "SwitchCase"] }],
    "quotes": ["warn", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "object-curly-spacing": ["warn", "always", { "arraysInObjects": true }],
    "no-useless-escape": "off",
    "quote-props": ["warn", "as-needed"],
    "eol-last": "warn",
    "operator-linebreak": "warn",
    "no-multi-spaces": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "no-trailing-spaces": "warn",
    "object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": true }],
    "object-curly-newline": ["warn", { "multiline": true }],
    "react-hooks/rules-of-hooks": "off",
    "no-debugger": "warn",
    "import/no-unresolved": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
  }
}
