// import { functionName } from "./functionName";

// function functionTemplate() {}

// export {  functionTemplate };

// import { functionName } from "./functionName";

let location = "boston,us"

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=e8257bcdcd628305b554f62d782b0777', {mode: 'cors'});
    const weatherData = await response.json();
    getWeather().then
    // console.log(weatherData);
    const currentWeather = new Object();
    //Add condition, celsius, and fahrenheit to object
    currentWeather.condition = weatherData.weather[0].main;
    currentWeather.cTemp = (weatherData.main.temp - 273.15).toFixed(1);
    currentWeather.fTemp = (((weatherData.main.temp - 273.15) * 9) / 5 + 32).toFixed(1);
    // console.log(currentWeather);
    return currentWeather;
}

export { getWeather };

