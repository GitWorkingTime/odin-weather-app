async function getWeatherData() {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/waterloo?key=[YOUR KEY]');
    const weatherData = await response.json();
    console.log(weatherData);

    for(let i = 0; i < weatherData.days.length; ++i ) {
        let day = {
            datetime: weatherData.days[i].datetime,
            datetimeEpoch: weatherData.days[i].datetimeEpoch,
            conditions: weatherData.days[i].conditions,
            feelslike: weatherData.days[i].feelslike,
            feelslikemin: weatherData.days[i].feelslikemin,
            feelslikemax: weatherData.days[i].feelslikemax,
            temp: weatherData.days[i].temp,
            tempmax: weatherData.days[i].tempmax,
            tempmin: weatherData.days[i].tempmin,
            hours: weatherData.days[i].hours
        }

        console.log(day);
    }
}

getWeatherData();