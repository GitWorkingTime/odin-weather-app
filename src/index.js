import "./styles.css"

async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=EXPHN8WUDLHV87H4H2CT2W46C&unitGroup=metric`);
    const weatherData = await response.json();
    
    let day = {
        location: location,
        datetime: weatherData.days[0].datetime,
        datetimeEpoch: weatherData.days[0].datetimeEpoch,
        conditions: weatherData.days[0].conditions,
        feelslike: weatherData.days[0].feelslike,
        feelslikemin: weatherData.days[0].feelslikemin,
        feelslikemax: weatherData.days[0].feelslikemax,
        temp: weatherData.days[0].temp,
        tempmax: weatherData.days[0].tempmax,
        tempmin: weatherData.days[0].tempmin,
        hours: weatherData.days[0].hours
    }


    updateClient(day);
}

const form = document.querySelector("form");
form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const locationInput = document.querySelector("#location-search");
    let location = locationInput.value.toLowerCase();

    console.log(location);
    locationInput.value = "";
    getWeatherData(location);
});

// DOM Manipulation
const overlay = document.querySelector("#overlay");
const location = document.querySelector("#location");
const temp = document.querySelector(".main>.temp");
const tempMin = document.querySelector(".temp-min");
const tempMax = document.querySelector(".temp-max");
const condition = document.querySelector("#condition");

function updateClient(dayObj) {
    location.textContent = dayObj.location;
    temp.textContent = `${dayObj.temp}℃`;
    tempMin.textContent = `Min: ${dayObj.tempmin}℃`;
    tempMax.textContent = `Max: ${dayObj.tempmax}℃`;
    condition.textContent = `${dayObj.conditions}`;
}





