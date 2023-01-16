import './reset.css';
import './style.css';
import { functionTemplate } from './functionTemplate.js'

console.log("Hello world!");
functionTemplate();
getWeather(); 

// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=e8257bcdcd628305b554f62d782b0777

let location = "boston,us"

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=e8257bcdcd628305b554f62d782b0777&units=imperial', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.main.temp);
    console.log(weatherData.weather[0].main);
}