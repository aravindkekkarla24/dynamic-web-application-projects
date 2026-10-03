let aboutBtnEl = document.getElementById("aboutBtn")
let timeToVisitBtnEl = document.getElementById("timeToVisitBtn")
let attractionsBtnEl = document.getElementById("attractionsBtn")


let aboutTabEl = document.getElementById("aboutTab")
let timeToVisitTabEl = document.getElementById("timeToVistTab")
let attractionsTabEl = document.getElementById("attractionsTab")


aboutBtnEl.addEventListener("click", function(){
    aboutTabEl.style.display = "block"
    timeToVisitTabEl.style.display = "none"
    attractionsTabEl.style.display = "none"
    aboutBtnEl.classList.add("active-button")
    timeToVisitBtnEl.classList.remove("active-button")
    attractionsBtnEl.classList.remove("active-button")
    
})


timeToVisitBtnEl.addEventListener("click", function(){
    aboutTabEl.style.display = "none"
    timeToVisitTabEl.style.display = "block"
    attractionsTabEl.style.display = "none"
    timeToVisitBtnEl.classList.add("active-button")
    aboutBtnEl.classList.remove("active-button")
    attractionsBtnEl.classList.remove("active-button")
})


attractionsBtnEl.addEventListener("click", function(){
    aboutTabEl.style.display = "none"
    timeToVisitTabEl.style.display = "none"
    attractionsTabEl.style.display = "block"
    attractionsBtnEl.classList.add("active-button")
    aboutBtnEl.classList.remove("active-button")
    timeToVisitBtnEl.classList.remove("active-button")
})

function initialTab(){
    aboutTabEl.style.display = "block"
    timeToVisitTabEl.style.display = "none"
    attractionsTabEl.style.display = "none"
    aboutBtnEl.classList.add("active-button")
    
}

initialTab()