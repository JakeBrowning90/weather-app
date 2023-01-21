import Day from './img/white-cloud-blue-sky.jpg'
import Dusk from './img/white-cloud-blue-sky.jpg'
import Night from './img/white-cloud-blue-sky.jpg'
import Dawn from './img/white-cloud-blue-sky.jpg'

function updateBG(currentTime) {
    let currentHour = currentTime.getHours();
    if (currentHour >= 9 && currentHour <= 14) {
        //Set day image
        document.body.style.backgroundImage = Day;
    } else if (currentHour >= 15 && currentHour <= 20) {
        //Set dusk image
        console.log("dusk");
        document.body.style.backgroundImage = Dusk;
    } else if (currentHour >= 21 || currentHour <= 2) {
        //Set night image
        document.body.style.backgroundImage = "url(../src/img/paul-volkmer-qVotvbsuM_c-unsplash.jpg)";
    } else if (currentHour >= 3 && currentHour <= 8) {
        //Set dawn image
        document.body.style.backgroundImage = "url(../src/img/sky-background-sunrise.jpg)";
    } 
}

export { updateBG };