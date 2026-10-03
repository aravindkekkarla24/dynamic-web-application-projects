let btnEl = document.getElementById("btn")
let divEl = document.getElementById("color-container")

let colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#1ABC9C", "#E74C3C", "#3498DB", "#2ECC71", "#E67E22"];


btnEl.addEventListener("click",()=>{
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    divEl.style.backgroundColor = randomColor
})