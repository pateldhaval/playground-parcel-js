import { setupCounter } from './utils/counter';
import { greet } from './utils/global';

const button = document.getElementById('counter');
setupCounter(button as HTMLElement, 10);

console.log(greet('John'));
