import { initialGet, saveFlow, addToList } from './helper-scripts.js';

initialGet();

document.getElementById('save-flow').addEventListener('click', saveFlow);
