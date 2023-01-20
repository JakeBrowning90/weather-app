// Randomly select city from array to show on page load
function getExampleCity() {
    const cities = ["Tokyo", "Mexico City", "Sao Paulo", "Lagos", " Istanbul", "Sydney", "McMurdo Station"];
    let selection = Math.floor(Math.random() * cities.length);
    return cities[selection];
}

export { getExampleCity };