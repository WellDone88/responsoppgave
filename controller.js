function randomLights(){
    model.selectedlampindex = Math.floor(Math.random() * 25);
    updateview()
    startTime = new Date().getTime();
}

function lampClicked() {
    let finishTime = new Date().getTime();
    let spentMilliseconds = finishTime - startTime;
    let spentSeconds = spentMilliseconds / 1000;

    document.getElementById('Sec').innerHTML = `Du brukte: ${spentSeconds.toFixed(2)} sekunder`;

    

    
    randomLights();
}