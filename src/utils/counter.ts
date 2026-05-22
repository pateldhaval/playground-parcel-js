export const setupCounter = (element: HTMLElement) => {
	let counter = 0;
	element.innerHTML = `Count: ${counter}`;

	const increment = (step = 1) => {
		counter = counter + step;
		element.innerHTML = `Count: ${counter}`;
	};

	element.addEventListener('click', () => increment(5));
};
