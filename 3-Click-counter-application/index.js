
var count = 0

function decreaseCounterValue(){

    const counterEl = document.getElementById("counterValue")
    count -= 1
    counterEl.textContent = count

    const counterValue = parseInt(counterEl.textContent)
    
    if (counterValue < 0){
        counterEl.style.color = "red"
    }else if(counterValue > 0){
        counterEl.style.color = "green"
    }else{
        counterEl.style.color = "black"
    }

   




    
}

function increaseCounterValue(){

    const counterEl = document.getElementById("counterValue")
    count += 1
    counterEl.textContent = count


    const counterValue = parseInt(counterEl.textContent)
    
    if (counterValue < 0){
        counterEl.style.color = "red"
    }else if(counterValue > 0){
        counterEl.style.color = "green"
    }else{
        counterEl.style.color = "black"
    }


    
}


function resetCounterValue(){

    const counterEl = document.getElementById("counterValue")
    count = 0
    counterEl.textContent = count



    const counterValue = parseInt(counterEl.textContent)
    
    if (counterValue < 0){
        counterEl.style.color = "red"
    }else if(counterValue > 0){
        counterEl.style.color = "green"
    }else{
        counterEl.style.color = "black"
    }


    
}