const inputText = document.getElementById('inputText');
const listContainer = document.getElementById('listContainer');
const addBtn = document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    if (inputText.value === '') {
        console.log("the input value is empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveToLS();
    }
    inputText.value = '';
}

listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveToLS();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveToLS();
    }
}, false)

inputText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (inputText.value === '') {
            console.log("the input value is empty");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputText.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"
            li.appendChild(span);
            saveToLS();
    }
    inputText.value = '';
    }
});

function saveToLS () {
    localStorage.setItem("taskData", listContainer.innerHTML)
}

function getDataGromLS () {
    listContainer.innerHTML = localStorage.getItem("taskData")
}

window.addEventListener('resize', function() {
    let changeBtn = document.getElementById('addBtn');
    if (window.innerWidth <= 850) { // או כל ערך שאתה מעוניין
        changeBtn.textContent = '+';
    } else {
        changeBtn.textContent = 'הוסף';
    }
});

// נקרא לפונקציה גם בפעם הראשונה שהדף נטען, כדי לקבוע את הערך התחילי
window.dispatchEvent(new Event('resize'));

getDataGromLS();