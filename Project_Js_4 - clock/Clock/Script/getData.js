import { createImg } from "./createImg.js";
import {  getUTC } from "./createClock.js";


//! function get the data from the service
async function getData(name) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
};

//! function extract the relevant information 
export async function dataInformation (countryName) {
    let myData = getData(countryName);
    myData.then((data) => {
        const dataFlag = data[0].flags.png;
        const dataCountryName = data[0].altSpellings[0];
        const dataUTC = data[0].timezones[0];

        let countryData = {
            dataFlag,
            dataCountryName,
            dataUTC
        };
        //! call the "createImg" function with the correct flag
        createImg(countryData.dataFlag)
        getUTC(countryData.dataUTC);
    });
};
