import './reset.css';
import './style.css';
import { getWeather } from './getWeather.js'
import { swapTemp } from './swapTemp'
// import { functionTemplate } from './functionTemplate.js'

const toggleButton = document.getElementById('toggleButton');
const timeStamp = document.getElementById('timeStamp');
const weatherIcon = document.getElementById('weatherIcon');
const locationDiv = document.getElementById('locationDiv');
const localTimeDiv = document.getElementById('localTimeDiv');
const conditionDiv = document.getElementById('conditionDiv');
const metricWindDiv = document.getElementById('metricWindDiv');
const imperialWindDiv = document.getElementById('imperialWindDiv');
const humidityDiv = document.getElementById('humidityDiv');
const cTempDiv = document.getElementById('cTempDiv');
const fTempDiv = document.getElementById('fTempDiv');
const cTempFeelDiv = document.getElementById('cTempFeelDiv');
const fTempFeelDiv = document.getElementById('fTempFeelDiv');

const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let weatherData = getWeather();
    weatherData.then(function() {
        weatherData.then((currentWeather) => weatherIcon.src = "http://openweathermap.org/img/wn/" + currentWeather.icon + "@2x.png");
        weatherData.then((currentWeather) => locationDiv.textContent = currentWeather.location + ", " + currentWeather.country);
        weatherData.then((currentWeather) => localTimeDiv.textContent = currentWeather.localTime);
        weatherData.then((currentWeather) => conditionDiv.textContent = currentWeather.condition);
        weatherData.then((currentWeather) => metricWindDiv.textContent = currentWeather.windSpeedKPH + " km/h " + currentWeather.windDirection);
        weatherData.then((currentWeather) => imperialWindDiv.textContent = currentWeather.windSpeedMPH + " mph " + currentWeather.windDirection);
        weatherData.then((currentWeather) => humidityDiv.textContent = currentWeather.humidity + "%");
        weatherData.then((currentWeather) => cTempDiv.textContent = currentWeather.cTemp + "° C");
        weatherData.then((currentWeather) => fTempDiv.textContent = currentWeather.fTemp + "° F");
        weatherData.then((currentWeather) => cTempFeelDiv.textContent = "Feels like " + currentWeather.cTempFeel + "° C");
        weatherData.then((currentWeather) => fTempFeelDiv.textContent = "Feels like " + currentWeather.fTempFeel + "° F");
        timeStamp.textContent = "Last searched: " + new Date(); 
    });
    weatherData.catch(function(e) {
        timeStamp.textContent = "Try again message"; 
    });
});

toggleButton.addEventListener('click', swapTemp);