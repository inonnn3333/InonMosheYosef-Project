const apiKey = 'c706b4f5c164596323eb383e74969f53';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector("weather-icon");


async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
        
        const weatherIcon = document.querySelector(".weather-icon");
        const dataIcon = data.weather[0].main;
        const lowerCase = dataIcon.toLowerCase();
        weatherIcon.src = `./images/${lowerCase}.png`;
    
        document.querySelector(".err").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        searchBox.value.innerHTML = "";
    }

    }
//קריאה לפונקציה על ידי לחיצת כפתור
searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});
