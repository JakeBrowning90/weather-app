import './reset.css';
import './style.css';
import { getWeather } from './getWeather.js'
// import { functionTemplate } from './functionTemplate.js'

let weatherData = getWeather();
weatherData.then((currentWeather) => console.log(currentWeather.condition));
weatherData.then((currentWeather) => console.log(currentWeather.cTemp));
weatherData.then((currentWeather) => console.log(currentWeather.fTemp));