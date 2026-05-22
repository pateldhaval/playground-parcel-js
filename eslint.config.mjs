import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['dist/', 'build/', 'node_modules/']),
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		extends: ['css/recommended'],
	},
	{
		rules: {
			...prettierConfig.rules, // Disable ESLint rules conflicting with Prettier
		},
	},
	{
		// Specify which files this plugin and rule applies to
		files: ['**/*.{ts,tsx,js,jsx}'],

		// Register the missing typescript-eslint plugin object
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},

		// Instruct ESLint to parse TypeScript code blocks properly
		languageOptions: {
			parser: tseslint.parser,
		},

		rules: {
			'no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
		},
	},
]);
