import './reset.css';
import './style.css';
import { callNewCity } from './callNewCity'
import { swapTemp } from './swapTemp'
import { getExampleCity } from './getExampleCity'

// import { functionTemplate } from './functionTemplate.js'

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

// Switch between displaying metric and imperial units, and C / F temps 
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', swapTemp);

// Submit entered city for API fetch
const form = document.getElementById('form');
const searchField = document.getElementById('cityField')
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let city = searchField.value;
    callNewCity(city);
});

// Automatically submit random city on page load
callNewCity(getExampleCity());