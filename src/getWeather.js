import { getWindCardinal } from './getWindCardinal';

async function getWeather(search) {
    const currentWeather = new Object();
    // Fetch API with search term
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search + '&APPID=e8257bcdcd628305b554f62d782b0777', {mode: 'cors'});
    const weatherData = await response.json();

    //Create new Object of selected response values
    currentWeather.icon = weatherData.weather[0].icon;
    currentWeather.location = weatherData.name;
    currentWeather.country = weatherData.sys.country;
    currentWeather.condition = weatherData.weather[0].main;

    //get current time in UTC milliseconds
    let userTime = Date.now(); 
    //get add searched city's offset to UTC time
    let msTargetTime = new Date(userTime + (weatherData.timezone * 1000));
    //Remove GMT from returned string
    currentWeather.localTime = (msTargetTime.toUTCString()).slice(0, -3);

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

