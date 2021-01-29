module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
    createDefaultProgram: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-console": 0,
    "no-bitwise": 0,
    "adjacent-overload-signatures": 0,
    "no-trailing-whitespace": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0
  },
};
