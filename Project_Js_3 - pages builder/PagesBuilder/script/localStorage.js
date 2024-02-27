const whiteSpaceInner = document.getElementById('whiteSpaceInner');
const savedOrNot = document.getElementById('savedOrNot');
savedOrNot.style.display = "none";

export function save() {
    const children = whiteSpaceInner.children;

    // create new dataBase
    const elementsData = [];

    // check every time 
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        const elementData = {
            tag: element.tagName,
            content: element.textContent,
            style: {
                width: element.style.width,
                height: element.style.height,
                border: element.style.border,
                borderRadius: element.style.borderRadius,
                backgroundColor: element.style.backgroundColor,
                fontSize: element.style.fontSize,
                color: element.style.color,
                padding: element.style.padding,
                margin: element.style.margin
            }
        };
        elementsData.push(elementData);
    }
    localStorage.setItem("savedElements", JSON.stringify(elementsData));
    console.log(elementsData);
    savedMsgDiv(elementsData);
}


export function loadElements() {
    const localStorageData = localStorage.getItem('savedElements');

    if (localStorageData) {
        const elementsData = JSON.parse(localStorageData);
        elementsData.forEach(elementData => {
            const newElement = document.createElement(elementData.tag);
            newElement.textContent = elementData.content;
            Object.assign(newElement.style, elementData.style);
            whiteSpaceInner.appendChild(newElement);
        });
    }
};

function savedMsgDiv(elementOrNot) {
    savedOrNot.style.display = "block";
    savedOrNot.innerHTML = "<div class='loader'></div>";
    if (elementOrNot.length === 0) {
        setTimeout(() => {
            savedOrNot.innerHTML = "צור אלמנט בכדי לשמור"
        }, 2000);
    } else {
        setTimeout(() => {
            savedOrNot.innerHTML = "הפרטים נשמרו בהצלחה"
        }, 2000);
    }
    setTimeout(() => {
        savedOrNot.style.display = "none";
    }, 4000);
}