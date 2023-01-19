

async function getWeather() {
    const city = document.getElementById('cityField')
    let location = city.value;
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=e8257bcdcd628305b554f62d782b0777', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const currentWeather = new Object();
    //Add condition, celsius, and fahrenheit to object
    currentWeather.icon = weatherData.weather[0].icon;
    currentWeather.location = weatherData.name;
    currentWeather.country = weatherData.sys.country;
    currentWeather.condition = weatherData.weather[0].main;
    currentWeather.humidity = weatherData.main.humidity;
    currentWeather.cTemp = (weatherData.main.temp - 273.15).toFixed(1);
    currentWeather.fTemp = (((weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed(1);
    currentWeather.cTempFeel = (weatherData.main.feels_like - 273.15).toFixed(1);
    currentWeather.fTempFeel = (((weatherData.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(1);

    // console.log(currentWeather);
    return currentWeather;
}

export { getWeather };

