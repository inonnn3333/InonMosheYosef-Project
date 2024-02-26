//! Create an img flag in DOM 
export async function createImg (name) {
    document.getElementById('img').innerHTML = `<img src="${name}" class="flagImg">`
};