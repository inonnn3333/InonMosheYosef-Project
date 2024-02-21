import { createDiv } from "./createElement.js";
import { clearFunc, yesFunc, noFunc } from "./btn.js";
import { save, loadElements } from "./localStorage.js";

// When the user ckick the button - the element created
document.getElementById('createBtn').addEventListener('click', createDiv);
// Clear Botton
document.getElementById('clearBtn').addEventListener('click', clearFunc);
// If the user want to delete all - than the paper resets
document.getElementById('yes').addEventListener('click', yesFunc);
// If the user dosn't want to delete all - than the bow disppear
document.getElementById('no').addEventListener('click', noFunc);
// If the user click on the SAVE BTN
document.getElementById('saveBtn').addEventListener('click', save);
// If the user click on the LOAD BTN
document.getElementById('loadBtn').addEventListener('click', loadElements);


