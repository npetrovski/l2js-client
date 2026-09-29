import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    // 1. Global Ignores
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/dist-browser/**",
            "**/server-source-code/**",
            "**/graphify-out/**"
        ]
    },
    // 2. TypeScript Specific Configuration
    {
        files: ["**/*.ts"], // 👈 Targets ONLY TypeScript files
        languageOptions: {
            parser: tseslint.parser, // Parses TS syntax so ESLint understands it
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        rules: {
            "curly": ["error", "all"] // 👈 Enforces brackets for if/for statements
        }
    }
);