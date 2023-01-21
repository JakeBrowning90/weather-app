function updateBG(currentTime) {
    let currentHour = currentTime.getHours();
    if (currentHour >= 9 && currentHour <= 14) {
        //Set day image
        document.body.style.backgroundImage = "url(../src/img/white-cloud-blue-sky.jpg)";
    } else if (currentHour >= 15 && currentHour <= 20) {
        //Set dusk image
        document.body.style.backgroundImage = "url(../src/img/nature-colorful-landscape-dusk-cloud.jpg)";
    } else if (currentHour >= 21 || currentHour <= 2) {
        //Set night image
        document.body.style.backgroundImage = "url(../src/img/paul-volkmer-qVotvbsuM_c-unsplash.jpg)";
    } else if (currentHour >= 3 && currentHour <= 8) {
        //Set dawn image
        document.body.style.backgroundImage = "url(../src/img/sky-background-sunrise.jpg)";
    } 
}

export { updateBG };