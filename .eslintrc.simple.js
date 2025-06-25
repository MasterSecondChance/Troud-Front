// Configuración ESLint simple y moderna
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Solo reglas esenciales
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // No necesario en React 17+
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
