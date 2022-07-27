
import { initialGet, saveFlow } from "./helper-scripts.js";

initialGet();

document.getElementById("save-flow").addEventListener("click", saveFlow);
