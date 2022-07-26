import { initialGet, saveFlow, addToList } from './helper-scripts.js';
const repeatElm = document.getElementById('repeat');
const rightElm = document.getElementById('right');
const leftElm = document.getElementById('left');

initialGet();

document.getElementById('save-flow').addEventListener('click', saveFlow);
repeatElm.addEventListener('click', () => {
  addToList(repeatElm);
});
rightElm.addEventListener('click', () => {
  addToList(rightElm);
});
leftElm.addEventListener('click', () => {
  addToList(leftElm);
});
