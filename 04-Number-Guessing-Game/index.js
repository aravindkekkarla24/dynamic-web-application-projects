let counterValue = document.getElementById("counterValue")
let startBtn = document.getElementById("startBtn")
let validateBtn = document.getElementById("validateBtn")



function generateNumber(){
    let randomNumber = Math.ceil(Math.random()*100)
    console.log(randomNumber)
    
    counterValue.textContent = randomNumber
    startBtn.disabled = true


    
    validateBtn.disabled = false

}

function checkNumber(){
    let inputNumberEl = document.getElementById("inputNumber")
    let inputNumberValue = inputNumberEl.value
    
    console.log(inputNumberValue)
}

function initGame(){
    validateBtn.disabled = true
}

initGame()