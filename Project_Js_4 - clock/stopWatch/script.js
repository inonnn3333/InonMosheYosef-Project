const display = document.querySelector('.display');
const startStopBtn = document.querySelector('.startStop');
const lapBtn = document.querySelector('.lap');
const lapTableBody = document.querySelector('.lapTable tbody');

let timer;
let lapCounter = 1;
let isRunning = false;
let startTime;
let lapTime;


//! פונקציה שיוצרת שעון - שעות, דקות ושניות
function formatTime(ms) {
    const date = new Date(ms);
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0').substring(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startStopBtn.textContent = 'התחל';
        lapBtn.disabled = true;
    } else {
        startTime = Date.now() - (lapTime || 0);
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
        startStopBtn.textContent = 'עצור';
        lapBtn.disabled = false;
    }
}

function lap() {
    if (isRunning) {
        const lapTimeElapsed = Date.now() - startTime;
        const lapDisplay = formatTime(lapTimeElapsed);
        const lapRow = `<tr><td>${lapCounter}</td><td>${lapDisplay}</td></tr>`;
        lapTableBody.insertAdjacentHTML('beforeend', lapRow);
        lapCounter++;
        lapTime = lapTimeElapsed;
    }
}

function reset() {
    clearInterval(timer);
    display.textContent = '00:00:00';
    lapTableBody.innerHTML = '';
    isRunning = false;
    startStopBtn.textContent = 'התחל';
    lapBtn.disabled = true;
    lapCounter = 1;
    lapTime = 0;
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

startStopBtn.addEventListener('click', startStop);
lapBtn.addEventListener('click', lap);
