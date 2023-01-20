
function swapTemp() {
    // If imperial is hidden, hide metric and show imperial. Else do the opposite
    if (fTempDiv.className == 'hidden') {
        cTempDiv.classList.add('hidden');
        cTempFeelDiv.classList.add('hidden');
        metricWindDiv.classList.add('hidden');
        fTempDiv.classList.remove('hidden');
        fTempFeelDiv.classList.remove('hidden');
        imperialWindDiv.classList.remove('hidden');
    } else if (cTempDiv.className == 'hidden') {
        fTempDiv.classList.add('hidden');
        fTempFeelDiv.classList.add('hidden');
        imperialWindDiv.classList.add('hidden');
        cTempDiv.classList.remove('hidden');
        cTempFeelDiv.classList.remove('hidden');
        metricWindDiv.classList.remove('hidden');
    }
}

export { swapTemp };