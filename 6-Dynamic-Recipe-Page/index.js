let imageContainerEl = document.getElementById("image-container")
let listContainerEl = document.getElementById("list-container")


//create image element dynamically

let imageEl = document.createElement("img")
imageEl.src = "https://images6.alphacoders.com/920/920933.jpg"
imageEl.style.width = "80vh"
imageEl.style.borderRadius = "15px"
imageEl.style.margin = "15px"

//Adding image element to image container


imageContainerEl.appendChild(imageEl)


//creating list items dynamically

let ingredients =  ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]


function createAndAppendListItems(item){
    let listItem = document.createElement("li")
    listItem.textContent = item
    listItem.style.color = "white"
    listItem.style.fontFamily = "Roboto"
    listItem.style.fontSize = "35px"
    listItem.style.margin = "5px"
    listContainerEl.appendChild(listItem)

}

for (let item of ingredients){
    createAndAppendListItems(item)
}