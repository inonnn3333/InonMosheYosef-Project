const allZoneEl=document.getElementById("allzone"), currentTimeEl=document.getElementById("currentTime"),
allZoneInput=document.getElementById("exampleDataList")
let defultInterval=setInterval(()=> currentTimeEl.innerText
= new Date().toLocaleString('en-us', { timeStyle: 'full' }), 1000)

fetch('worldclock.json')
.then(res => res.json())
.then(data => {
data.map(e => {
const option = document.createElement('option')
option.innerText = e.timezone
allZoneEl.appendChild(option)
})
})
.catch(err => console.log(err))

allZoneInput.oninput = () => setInterval(() => time(), 1000)

function time() {
// console.log(allZoneInput.value);
const ctime = new Date().toLocaleString('en-us', { timeZone: allZoneInput.value, timeStyle: 'full' })

currentTimeEl.innerText = ctime
clearInterval(defultInterval)
}

// סקריפט שעון טיימר עשיתי מודול סתם כדי לדחוף את היכולת הזו איפשהו:
export default class timer {
constructor(root) {
root.innerHTML = timer.getHTML();
this.el = {
hours: root.querySelector(".timerPart--hour"),
minutes: root.querySelector(".timerPart--minutes"),
seconds: root.querySelector(".timerPart--seconds"),
conrtol: root.querySelector(".timerPart--control"),
setTimer: root.querySelector(".Tvalues")
};
this.interval = null

this.remainingMin = 0
this.remainingSec = 0

this.el.conrtol.addEventListener("click", () => {
if (this.interval === null) {
this.start()
} else {
this.stop()
}
})
this.el.setTimer.addEventListener("click", () => {

const inputMin = prompt("Please enter number of minutes (if it's 00 please enter 00)")


if (inputMin) {
this.remainingMin = inputMin
this.updateInterfaceTime()
}
})


}

updateInterfaceTime() {
const hours = Math.floor(this.remainingMin / 60)
const minutes = Math.floor(this.remainingMin % 60 || this.remainingSec / 60)
const seconds = this.remainingSec % 60
console.log(hours, minutes, seconds)

this.el.hours.textContent = hours.toString().padStart(2, "0")
this.el.minutes.textContent = minutes.toString().padStart(2, "0")
this.el.seconds.textContent = seconds.toString().padStart(2, "0")
}

updateInterfaceControls() {
if (this.interval === null) {
this.el.conrtol.innerHTML = Start
} else {
this.el.conrtol.innerHTML = Stop
}
}

start() {
if (this.remainingSec === 0 & this.remainingMin === 0) return;

this.interval = setInterval(() => {
if (this.remainingSec > 1) { this.remainingSec-- } else {
this.remainingSec = 59
this.remainingMin--
}
if (this.remainingMin < 1){
    this.remainingMin=60
};
this.updateInterfaceTime();
if (this.remainingSec===0 &this.remainingMin===0){
    this.stop() 
}
}, 1000);
this.updateInterfaceControls() }
stop() {
    clearInterval(this.interval); this.interval = null; this.el.conrtol.innerHTML=Resume } static getHTML() { return ` <div
    class="timerConteiner" id="timerConteiner">
    <div>
        <span class="timerPart timerPart--hour" id="hour">00</span>

        <span class="text"> Hours</span>
    </div>
    <div>
        <span class="timerPart timerPart--minutes" id="minutes">00</span>

        <span class="text"> Minutes</span>
    </div>
    <div>
        <span class="timerPart timerPart--seconds" id="seconds">00</span>

        <span class="text"> Seconds</span>
    </div>

    </div>
    <div class="startContainer ">
        <button class="setTimer Tvalues">Set values</button>
        <button class="setTimer timerPart--control">Start</button>
    </div>
    `
    }
    }