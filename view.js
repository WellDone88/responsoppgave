const appDiv = document.getElementById('app');
let StartTime = 0;

function updateview(){
let HTML = '';


for (let i = 0; i < 25; i++) {
        let LampeDiv = "divStyle";

        if (i === model.selectedlampindex) {
            LampeDiv = " divStyle lighton"
            HTML += /*HTML*/ `
            <div class="${LampeDiv}" onclick="lampClicked()"></div>`;
        } 
        
        else {
            HTML += `<div class="${LampeDiv}"></div>`;
        }
    }


appDiv.innerHTML = HTML;


}




updateview()

window.addEventListener("load", function() {
  randomLights();
});

