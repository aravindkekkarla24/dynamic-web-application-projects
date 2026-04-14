let containerEl = document.getElementById("container")
let buttonEl = document.getElementById("btn")


buttonEl.addEventListener("click",()=>{
    containerEl.classList.toggle("dark-mode")
    

    if (containerEl.classList.contains("dark-mode")) {
        buttonEl.textContent = "Switch to Light Mode";
        buttonEl.classList.add("light-btn")

        buttonEl.classList.remove("dark-btn")
        
        
    } else {
        buttonEl.textContent = "Switch to Dark Mode";
        buttonEl.classList.add("dark-btn")

        buttonEl.classList.remove("light-btn")
    }
})