import { getCounterText, setupCounter } from './counter';

describe('Check counter functionality', () => {
	test('should return counter text', () => {
		const text = getCounterText(10);

		expect(text).toBe('Count: 10');
	});

	test('should setup counter with text', () => {
		const button = document.createElement('button');

		setupCounter(button, 3);
		expect(button.innerHTML).toBe('Count: 0');

		button.click();
		expect(button.innerHTML).toBe('Count: 3');

		button.click();
		expect(button.innerHTML).toBe('Count: 6');
	});
});
