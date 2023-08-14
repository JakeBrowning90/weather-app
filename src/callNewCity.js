import { getWeather } from './getWeather.js'
import { updateBG } from './updateBG'

function callNewCity(city) {
    let weatherData = getWeather(city);
    weatherData.then(function() {
        weatherData.then((currentWeather) => weatherIcon.src = "http://openweathermap.org/img/wn/" + currentWeather.icon + "@2x.png");
        weatherData.then((currentWeather) => locationDiv.textContent = currentWeather.location + ", " + currentWeather.country);
        localTimeDiv.innerHTML = "Local time: <br />"; 
        weatherData.then((currentWeather) => localTimeDiv.innerHTML += currentWeather.localTime);
        weatherData.then((currentWeather) => conditionDiv.textContent = currentWeather.condition);
        weatherData.then((currentWeather) => metricWindDiv.textContent = "Wind: " + currentWeather.windDirection + " " + currentWeather.windSpeedKPH + " km/h");
        weatherData.then((currentWeather) => imperialWindDiv.textContent = "Wind: " + currentWeather.windDirection + " " + currentWeather.windSpeedMPH + " mph");
        weatherData.then((currentWeather) => humidityDiv.textContent = "Humidity: " + currentWeather.humidity + "%");
        weatherData.then((currentWeather) => cTempDiv.textContent = currentWeather.cTemp + "° C");
        weatherData.then((currentWeather) => fTempDiv.textContent = currentWeather.fTemp + "° F");
        weatherData.then((currentWeather) => cTempFeelDiv.textContent = "Feels like " + currentWeather.cTempFeel + "° C");
        weatherData.then((currentWeather) => fTempFeelDiv.textContent = "Feels like " + currentWeather.fTempFeel + "° F");
        let currentTime = new Date()
        timeStamp.textContent = "Last searched: " + currentTime; 
        // Adjust background to user's local time
        updateBG(currentTime);
    });
    weatherData.catch(function(e) {
        timeStamp.innerHTML = "No results found!<br />"; 
        timeStamp.innerHTML += 'Try searching for a city name, or a city name followed by a comma and country / country code. Include a state abbreviation for US cities.'; 
    });
}

export { callNewCity };

