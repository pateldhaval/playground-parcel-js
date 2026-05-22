import { greet } from './global';

describe('Basic testing', () => {
	test('should greet with name', () => {
		expect(greet('Mark')).toBe('Hello, Mark!');
	});
});
