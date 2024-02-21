//! Create an img flag in DOM 
export async function createImg (name) {
    document.getElementById('ss').innerHTML = `<img src="${name}" class="flagImg">`
};