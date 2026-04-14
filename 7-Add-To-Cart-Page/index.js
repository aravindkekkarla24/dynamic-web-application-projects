let itemContainer = document.getElementById("item-container")
let addBtnEl = document.getElementById("addBtn")

function getInputAndAppendItem(){
    let inputItemEl = document.getElementById("item-input")
    let inputValue = inputItemEl.value


    if (inputValue === ""){
        alert("Enter Valid Input")
        return
    }

    
    let item = document.createElement("li")
    item.textContent = inputValue

    
    itemContainer.appendChild(item)

    inputItemEl.value = ""

    
}

addBtnEl.addEventListener("click", getInputAndAppendItem)