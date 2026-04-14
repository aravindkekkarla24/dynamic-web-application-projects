

let aboutTabEl = document.getElementById("about")
let timeTabEl = document.getElementById("time")
let attractionsTabEl = document.getElementById("attractions")


let aboutBtnEl = document.getElementById("aboutBtn")
let timeBtnEl = document.getElementById("timeBtn")
let attractionsBtnEl = document.getElementById("attractionsBtn")



//initiall hide the tabs expect about tab

timeTabEl.classList.add("hide-tab")
attractionsTabEl.classList.add("hide-tab")


aboutBtnEl.addEventListener("click",()=>{
    aboutTabEl.classList.remove("hide-tab")
    timeTabEl.classList.add("hide-tab")
    attractionsTabEl.classList.add("hide-tab")
})


timeBtnEl.addEventListener("click",()=>{
    aboutTabEl.classList.add("hide-tab")
    timeTabEl.classList.remove("hide-tab")
    attractionsTabEl.classList.add("hide-tab")
})


attractionsBtnEl.addEventListener("click",()=>{
    aboutTabEl.classList.add("hide-tab")
    timeTabEl.classList.add("hide-tab")
    attractionsTabEl.classList.remove("hide-tab")
})