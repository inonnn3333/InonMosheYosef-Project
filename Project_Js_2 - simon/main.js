const startBtn = document.getElementById('startGameBtn');
const messageDiv = document.getElementById('theMessage');
const countdownDisplay = document.getElementById('countdown');

let playerScore = 0;
let arrNum = []; 
let NowUserTurn = false;
let highScore = 0;
let gameScore = 0; 
let userCounter = 0;
let countdown = 7;

let sounds = {
    greenSound: new Audio("simonSound1.mp3"),
    redSound: new Audio("simonSound2.mp3"),
    blueSound: new Audio("simonSound3.mp3"),
    yellowSound: new Audio("simonSound4.mp3"),
};

Object.values(sounds).forEach(sound => sound.load());

async function playSound(sound) {
    return new Promise(resolve => {
        sound.addEventListener('ended', resolve);
        sound.play();
    });
}

let initGame = () => {
    messageDiv.style.display = "none";
    arrNum = [];
    playerScore = 0;
}

function showMessage() {    
    countdown = 7;
    messageDiv.style.display = 'block';
    let countdownInterval = setInterval(function() {
        countdown--;
        countdownDisplay.innerText = "Closing in " + countdown + " seconds";

        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    setTimeout(function() {
        messageDiv.style.display = 'none';
        startBtn.style.display = "block";
    }, 7000);
}

function startTheGame () {
    initGame();
    startBtn.style.display = "none";
    gameControler();
}

let createStep = () => {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    return randomNum;
}

async function gameControler () {
    NowUserTurn = false;
    let giveRandomNum = createStep();
    arrNum.push(giveRandomNum);
    await pcTurnNow()
    NowUserTurn = true;
}

async function pcTurnNow () {
    NowUserTurn = false;
    let someCounter = 0;
    await delay(1000);
    for (let i of arrNum) {
        if (someCounter !== arrNum.length) {
            if (i == 1) {
                await delay(20);
                await lightUpButton("red");
                await playSound(sounds.redSound);
                await delay(20);
            }
            if (i == 2) {
                await delay(20);
                await lightUpButton("green");
                await playSound(sounds.greenSound);
                await delay(20);
            }
            if (i == 3) {
                await delay(20);
                await lightUpButton("yellow");
                await playSound(sounds.yellowSound);
                await delay(20);
            }
            if (i == 4) {
                await delay(20);
                await lightUpButton("blue");
                await playSound(sounds.blueSound);
                await delay(20);
            }
            someCounter++;
        } 
    }
    NowUserTurn = true;
}


function TheUserTurn (guess) {
    if (NowUserTurn) {
        if (guessTrueOrFalse(guess, userCounter)) {
            userCounter++
            if (userCounter >= arrNum.length) {
                gameScore++
                userScoreInGame(gameScore);
                userCounter = 0;
                gameControler();
            }
        } else {
            theMessageContent(gameScore);
            showMessage();
            gameScore = 0;
            userScoreInGame(gameScore);
            NowUserTurn = false;
            saveHighScore(calcHighScore())
        }
    }
} 

function guessTrueOrFalse (color, theIndex) {
    return color === arrNum[theIndex];
}

function userClickOnColor (event) {
    if (NowUserTurn) {
        if (event.target.id === "red") {
            playSound(sounds.redSound);
            return TheUserTurn(1);
        }
        if (event.target.id === "green") {
            playSound(sounds.greenSound);
            return TheUserTurn(2);
        }
        if (event.target.id === "yellow") {
            playSound(sounds.yellowSound);
            return TheUserTurn(3);
        }
        if (event.target.id === "blue") {
            playSound(sounds.blueSound);
            return TheUserTurn(4);
        }
    }
}

function userScoreInGame(theScore) {
    spanScoreInGame.innerHTML = theScore;
}

function theMessageContent (score) {
    spanScore.innerHTML = score;
    spanHighScore.innerHTML = calcHighScore()
}

async function lightUpButton(buttonId) {
    const buttonElement = document.getElementById(buttonId);
    buttonElement.classList.add(`${buttonId}On`);
    await delay(150);
    buttonElement.classList.remove(`${buttonId}On`);
    await delay(150);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function calcHighScore() {
    let savedScore = localStorage.getItem("highScoreSimon");
    if (savedScore != null && savedScore > gameScore) {
        return savedScore;
    } else {
    localStorage.setItem("highScoreSimon", gameScore);
        return gameScore;
    }
}

function saveHighScore(highScore) {
    localStorage.setItem("highScoreSimon", highScore);
}

initGame();
let redBtn = document.getElementById('red').addEventListener('click', userClickOnColor);
let greenBtn = document.getElementById('green').addEventListener('click', userClickOnColor);
let yellowBtn = document.getElementById('yellow').addEventListener('click', userClickOnColor);
let blueBtn = document.getElementById('blue').addEventListener('click', userClickOnColor);
let spanScoreInGame = document.getElementById('spanScoreInGame');
let spanScore = document.getElementById('spanScore');
let spanHighScore = document.getElementById('spanHighScore');
startBtn.addEventListener('click', startTheGame);