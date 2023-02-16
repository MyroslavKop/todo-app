module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": 0,
    "react/jsx-no-constructed-context-values": "off",
  },
  plugins: ["prettier"],
  ignorePatterns: [".eslintrc.js"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};