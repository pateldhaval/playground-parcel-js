import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		// globals allows using describe, test, expect without explicit imports
		globals: true,
	},
});
