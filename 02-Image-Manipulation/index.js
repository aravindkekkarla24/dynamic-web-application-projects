//Buttons

let offBtnEl = document.getElementById("offBtn")
let onBtnEl = document.getElementById("onBtn")

let spanEl = document.getElementById("spanId")

let bulbImgEl = document.getElementById("bulb")
let catImgEl = document.getElementById("cat")



function switchON(){
    offBtnEl.style.backgroundColor = "red"
    onBtnEl.style.backgroundColor = "white"
    spanEl.textContent = "ON"
    bulbImgEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImgEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    
}


function switchOFF(){
    onBtnEl.style.backgroundColor = "green"
    offBtnEl.style.backgroundColor = "white"
    spanEl.textContent = "OFF"

    bulbImgEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImgEl.src =  "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    
}


//Default Fault Condition is ON

switchON()






