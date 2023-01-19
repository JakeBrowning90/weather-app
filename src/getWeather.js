import { getWindCardinal } from './getWindCardinal';

async function getWeather() {
    const city = document.getElementById('cityField')
    let location = city.value;
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=e8257bcdcd628305b554f62d782b0777', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const currentWeather = new Object();
    currentWeather.icon = weatherData.weather[0].icon;
    currentWeather.location = weatherData.name;
    currentWeather.country = weatherData.sys.country;
    currentWeather.condition = weatherData.weather[0].main;
    // Convert wind direction to compass direction
    currentWeather.windDirection = getWindCardinal(weatherData.wind.deg);
    // Convert wind speed to kph and mph
    currentWeather.windSpeedKPH = (weatherData.wind.speed * 3.6).toFixed(0);
    currentWeather.windSpeedMPH = (weatherData.wind.speed * 2.237).toFixed(0);
    currentWeather.humidity = weatherData.main.humidity;
    //Convert Kelvin temps to C and F
    currentWeather.cTemp = (weatherData.main.temp - 273.15).toFixed(1);
    currentWeather.fTemp = (((weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed(1);
    currentWeather.cTempFeel = (weatherData.main.feels_like - 273.15).toFixed(1);
    currentWeather.fTempFeel = (((weatherData.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(1);

    return currentWeather;
}

export { getWeather };

