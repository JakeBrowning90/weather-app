// import { getWindCardinal } from './getWindCardinal';
import { getWeather } from './getWeather.js'

function callNewCity(city) {
    let weatherData = getWeather(city);
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
        timeStamp.textContent = 'No results found! Try searching for a city name ("New York") or a city name followed by a country name or 2-letter country code("Auckland, New Zealand" or "Auckland, NZ")'; 
    });
}

export { callNewCity };

