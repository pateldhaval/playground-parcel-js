export const getCounterText = (count: number) => {
	return `Count: ${count}`;
};

export const setupCounter = (element: HTMLElement, step = 1) => {
	let counter = 0;
	element.innerHTML = getCounterText(counter);

	const increment = (step = 1) => {
		counter = counter + step;
		element.innerHTML = getCounterText(counter);
	};

	element.addEventListener('click', () => increment(step));
};
