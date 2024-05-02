// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.textContent = 'Header';
h1.className = 'header';

root.append(h1);

// console.log(root);