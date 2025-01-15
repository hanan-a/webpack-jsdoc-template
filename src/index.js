import { HelloWorld } from './components/HelloWorld';

/**
 * @type {HTMLElement | null}
 */
const app = document.getElementById('app');
app?.appendChild(HelloWorld());
