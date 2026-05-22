import { setupCounter } from './utils/counter';
import { greet } from './utils/global';

const button = document.getElementById('counter');
setupCounter(button as HTMLElement, 5);

console.log(greet('John'));
