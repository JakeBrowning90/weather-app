function updateBG(currentTime) {
    document.body.removeAttribute('class');
    let currentHour = currentTime.getHours();
    if (currentHour >= 9 && currentHour <= 14) {
        //Set day image
        document.body.classList.add('dayBG');
    } else if (currentHour >= 15 && currentHour <= 20) {
        //Set dusk image
        document.body.classList.add('duskBG');
    } else if (currentHour >= 21 || currentHour <= 2) {
        //Set night image
        document.body.classList.add('nightBG');
    } else if (currentHour >= 3 && currentHour <= 8) {
        //Set dawn image
        document.body.classList.add('dawnBG');
    } 
}

export { updateBG };