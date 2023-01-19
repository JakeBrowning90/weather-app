function getWindCardinal(degree) {
    let windDirection;
    // Set cardinal direction for wind
    if ((348.75 < degree && degree < 361) || (-1 < degree && degree < 11.25)) {
        windDirection = "N";
    } else if (11.25 < degree && degree < 33.75) {
        windDirection = "NNE";
    } else if (33.75 < degree && degree < 56.25) {
        windDirection = "NE";
    } else if (56.25 < degree&& degree < 78.75) {
        windDirection = "ENE";
    } else if (78.75 < degree && degree < 101.25) {
        windDirection = "E";
    } else if (101.25 < degree && degree < 123.75) {
        windDirection = "ESE";
    } else if (123.75 < degree && degree < 146.25) {
        windDirection = "SE";
    } else if (146.25 < degree && degree < 168.75) {
        windDirection = "SSE";
    } else if (168.75 < degree && degree < 191.25) {
        windDirection = "S";
    } else if (191.25 < degree && degree < 213.75) {
        windDirection = "SSW";
    } else if (213.75 < degree && degree < 236.25) {
        windDirection = "SW";
    } else if (236.25 < degree && degree < 258.75) {
        windDirection = "WSW";
    } else if (258.75 < degree && degree < 281.25) {
        windDirection = "W";
    } else if (281.25 < degree && degree < 303.75) {
        windDirection = "WNW";
    } else if (303.75 < degree && degree < 326.25) {
        windDirection = "NW";
    } else if (326.25 < degree && degree < 348.75) {
        windDirection = "NNW";
    } else {
        windDirection = "Invalid";
    } 
    return windDirection;
}

export { getWindCardinal };