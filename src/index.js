import './reset.css';
import './style.css';
// import { getWeather } from './getWeather.js'
import { callNewCity } from './callNewCity'
import { swapTemp } from './swapTemp'
// import { functionTemplate } from './functionTemplate.js'
const searchField = document.getElementById('cityField')

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

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', swapTemp);

const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = searchField.value;
    callNewCity(city);
});

callNewCity("Lagos");