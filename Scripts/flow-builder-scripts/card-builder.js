import { initialGet } from './flow-builder-init.js';
import { saveFlow, updateFlow } from './helper-scripts.js';

initialGet();

document.getElementById('save-flow').addEventListener('click', saveFlow);

document.getElementById('update-flow').addEventListener('click', updateFlow);
