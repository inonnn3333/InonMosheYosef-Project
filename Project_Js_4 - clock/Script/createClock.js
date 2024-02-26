const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

let clock = new Date();
let signUTC;
let someUTSToNumber;


//! Local Clock
export function createClock () {
    if (someUTSToNumber) {
        setInterval(() => {   
            clock = new Date();  
            let hours = clock.getHours();

            if (signUTC == '+') {
                let adjustedHours = hours - 2  + parseInt(someUTSToNumber);
                hrs.innerHTML = eval(adjustedHours).toString().padStart(2, '0');
            } else {
                let adjustedHours = hours - 2 + parseInt(someUTSToNumber);
                hrs.innerHTML = eval(adjustedHours).toString().padStart(2, '0');
            }
            switch (hrs) {
                case -1:
                    hrs = 23;
                    break;
                case -2:
                    hrs = 22;
                    break;
                case -3:
                    hrs = 21;
                    break;
                case -4:
                    hrs = 20;
                    break;
                case -5:
                    hrs = 19;
                    break;
                case -6:
                    hrs = 18;
                    break;
                case -7:
                    hrs = 17;
                    break;
                case -8:
                    hrs = 16;
                    break;
                case -9:
                    hrs = 15;
                    break;
                case -10:
                    hrs = 14;
                    break;
                case -11:
                    hrs = 13;
                    break;
                case -12:
                    hrs = 12;
                    break;
                case 24:
                    hrs = 0;
                    break;
                case 25:
                    hrs = 1;
                    break;
                case 26:
                    hrs = 2;
                    break;
                case 27:
                    hrs = 3;
                    break;
                case 28:
                    hrs = 4;
                    break;
                case 29:
                    hrs = 5;
                    break;
                case 30:
                    hrs = 6;
                    break;
                case 31:
                    hrs = 7;
                    break;
                case 32:
                    hrs = 8;
                    break;
                case 33:
                    hrs = 9;
                    break;
                case 34:
                    hrs = 10;
                    break;
                case 35:
                    hrs = 11;
                    break;
                case 36:
                    hrs = 12;
                    break;
                case 37:
                    hrs = 13;
                    break;
                case 38:
                    hrs = 14;
                    break;
            }
            min.innerHTML = clock.getMinutes().toString().padStart(2, `0`);
            sec.innerHTML = clock.getSeconds().toString().padStart(2, `0`);
        }, 1000);
    } else {
        setInterval(() => {   
            clock = new Date();     
            hrs.innerHTML = clock.getHours().toString().padStart(2, `0`);
            min.innerHTML = clock.getMinutes().toString().padStart(2, `0`);
            sec.innerHTML = clock.getSeconds().toString().padStart(2, `0`);
        }, 1000);
    }
}

export  async function getUTC(someUTC) {
    someUTSToNumber = Number(someUTC.slice(4, 6));
    signUTC = someUTC.slice(3, 4);
    createClock();
}