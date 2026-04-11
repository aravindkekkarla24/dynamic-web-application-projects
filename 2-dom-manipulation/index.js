document.getElementById("offBtn").style.backgroundColor = "red"   //makeing initial condition switch on and switch of button color red


function switchOff(){
    const bulbImgElement = document.getElementById("bulb-image")
    const catImgElement = document.getElementById("cat-image")

    const switchStatusElement = document.getElementById("switch-status")
    const switchOffBtnElement = document.getElementById("offBtn")
    const switchOnBtnElement = document.getElementById("onBtn")

    bulbImgElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImgElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"

    switchStatusElement.textContent = "Switched Off"
    switchOffBtnElement.style.backgroundColor = "white"
    switchOnBtnElement.style.backgroundColor = "green"


}


function switchOn(){
    const bulbImgElement = document.getElementById("bulb-image")
    const catImgElement = document.getElementById("cat-image")

    const switchStatusElement = document.getElementById("switch-status")
    const switchOffBtnElement = document.getElementById("offBtn")
    const switchOnBtnElement = document.getElementById("onBtn")



    bulbImgElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImgElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"

    switchStatusElement.textContent = "Switched On"
    switchOffBtnElement.style.backgroundColor = "red"
    switchOnBtnElement.style.backgroundColor = "white"
}