import { dataInformation } from "./Script/getData.js";
import { createClock } from "./Script/createClock.js";

const btnSearch = document.getElementById('btnSearch');

btnSearch.addEventListener('click', ()=> {
    const myValue = document.getElementById('value').value;

    //! Call "dataInformation" function with the country name that the user enter.
    dataInformation(myValue)
});

createClock();

// Function to parse UTC offset from the dataUTC string
function parseUTCOffset(dataUTC) {
    const offsetStr = dataUTC.replace('UTC', '');
    const [sign, hours, minutes] = offsetStr.split(/[:\+]/).filter(Boolean);
    const offset = (sign === '-') ? -1 : 1;
    return (offset * (parseInt(hours, 10) + (parseInt(minutes, 10) / 60))) * 60 * 60 * 1000;
}

// Function to convert UTC time to local time using the parsed UTC offset
function convertUTCToLocalWithOffset(utcTime, offset) {
  // Calculate local time
    const localTime = new Date(utcTime.getTime() + offset);

  // Format the time (adjust as needed)
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return localTime.toLocaleString('en-US', options);
}

// Example usage
const dataCountryName = "IL";
const dataUTC = "UTC+02:00";

const utcTime = new Date(); // Get current UTC time
console.log(utcTime);
const utcOffset = parseUTCOffset(dataUTC);
const localTime = convertUTCToLocalWithOffset(utcTime, utcOffset);
console.log(`Local time in ${dataCountryName}: ${localTime}`);
