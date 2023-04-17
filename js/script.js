menBtn = document.querySelector("#mobile-icon")
mainMenu = document.querySelector("#mobile-menu")

menBtn.addEventListener("click", () => {
    let expand = menBtn.getAttribute("aria-expanded")
    if (expand == "false") {
        menBtn.setAttribute("aria-expanded", "true")
        mainMenu.setAttribute("class", "")
        console.log("main menu set to:" + mainMenu.getAttribute("class"))
    } else {
        menBtn.setAttribute("aria-expanded", "false")
        mainMenu.setAttribute("class", "hidden")
        console.log("main menu set to:" + mainMenu.getAttribute("class"))
    }
})