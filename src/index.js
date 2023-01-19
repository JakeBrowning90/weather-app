import './reset.css';
import './style.css';
import { getWeather } from './getWeather.js'
// import { functionTemplate } from './functionTemplate.js'

const toggleButton = document.getElementById('toggleButton');
const timeStamp = document.getElementById('timeStamp');
const weatherIcon = document.getElementById('weatherIcon');
const locationDiv = document.getElementById('locationDiv');
const timeDiv = document.getElementById('timeDiv');
const conditionDiv = document.getElementById('conditionDiv');
const humidityDiv = document.getElementById('humidityDiv');
const cTempDiv = document.getElementById('cTempDiv');
const fTempDiv = document.getElementById('fTempDiv');
const cTempFeelDiv = document.getElementById('cTempFeelDiv');
const fTempFeelDiv = document.getElementById('fTempFeelDiv');

const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let weatherData = getWeather();
    weatherData.then((currentWeather) => weatherIcon.src = "http://openweathermap.org/img/wn/" + currentWeather.icon + "@2x.png");
    weatherData.then((currentWeather) => locationDiv.textContent = currentWeather.location + ", " + currentWeather.country);
    weatherData.then((currentWeather) => conditionDiv.textContent = currentWeather.condition);
    weatherData.then((currentWeather) => humidityDiv.textContent = currentWeather.humidity + "%");
    weatherData.then((currentWeather) => cTempDiv.textContent = currentWeather.cTemp + "C");
    weatherData.then((currentWeather) => fTempDiv.textContent = currentWeather.fTemp + "F");
    weatherData.then((currentWeather) => cTempFeelDiv.textContent = "Feels like " + currentWeather.cTempFeel + "C");
    weatherData.then((currentWeather) => fTempFeelDiv.textContent = "Feels like " + currentWeather.fTempFeel + "F");
    timeStamp.textContent = "Last updated: " + new Date();
});

toggleButton.addEventListener('click', swapTemp);

function swapTemp() {
    console.log('swap!');
    if (fTempDiv.className == 'hidden') {
        cTempDiv.classList.add('hidden');
        cTempFeelDiv.classList.add('hidden');
        fTempDiv.classList.remove('hidden');
        fTempFeelDiv.classList.remove('hidden');
    } else if (cTempDiv.className == 'hidden') {
        fTempDiv.classList.add('hidden');
        fTempFeelDiv.classList.add('hidden');
        cTempDiv.classList.remove('hidden');
        cTempFeelDiv.classList.remove('hidden');
       
    }
}


// let weatherData = getWeather();
// weatherData.then((currentWeather) => weatherIcon.src = "http://openweathermap.org/img/wn/" + currentWeather.icon + "@2x.png");
// weatherData.then((currentWeather) => locationDiv.textContent = currentWeather.location);
// weatherData.then((currentWeather) => conditionDiv.textContent = currentWeather.condition);
// weatherData.then((currentWeather) => tempDiv.textContent = currentWeather.cTemp + "C / " + currentWeather.fTemp + "F");
// timeDiv.textContent = Date();
// weatherData.then((currentWeather) => console.log(currentWeather.cTemp));
// weatherData.then((currentWeather) => console.log(currentWeather.fTemp));





