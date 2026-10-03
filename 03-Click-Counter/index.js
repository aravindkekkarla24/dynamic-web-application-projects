let incrementBtn = document.getElementById("increaseBtn")
let resetBtn = document.getElementById("resetBtn")
let decrementBtn = document.getElementById("decreaseBtn")


let counterValueEl = document.getElementById("counterValue")
let counterValue = parseInt(counterValueEl.textContent)


function counterColorUpdater(){
    if (counterValue < 0){
        counterValueEl.style.color = "red"
    }else if(counterValue > 0){
        counterValueEl.style.color = "green"
    }else{
        counterValueEl.style.color = "white"
    }
}

function increment(){
    console.log("Button is triggered...")
    
    console.log(counterValue)
    counterValue += 1
    counterColorUpdater()
    counterValueEl.textContent = counterValue
    incrementBtn.style.backgroundColor = "green"
    incrementBtn.style.color = "white"

    resetBtn.style.backgroundColor = "white"
    resetBtn.style.color = "black"

    decrementBtn.style.backgroundColor = "white"
    decrementBtn.style.color = "black"
    
}


function decrement(){
    
    console.log(counterValue)
    counterValue -= 1
    counterColorUpdater()
    counterValueEl.textContent = counterValue
    incrementBtn.style.backgroundColor = "white"
    incrementBtn.style.color = "black"

    resetBtn.style.backgroundColor = "white"
    resetBtn.style.color = "black"

    decrementBtn.style.backgroundColor = "red"
    decrementBtn.style.color = "white"
    
}


function reset(){
    
    console.log(counterValue)
    counterValue = 0
    counterColorUpdater()
    counterValueEl.textContent = counterValue
    incrementBtn.style.backgroundColor = "white"
    incrementBtn.style.color = "black"

    resetBtn.style.backgroundColor = "white"
    resetBtn.style.color = "black"

    decrementBtn.style.backgroundColor = "white"
    decrementBtn.style.color = "black"
    
}