// Start Toggle Menu

let bars = document.querySelector("#bars")
let menu = document.getElementById("menu")
let menuItems = document.getElementById("menu-items")
let xBtn = document.getElementById("x-btn")
let transparent = document.getElementById("transparent-layer")

// 
bars.addEventListener('click', openMenu ) 

xBtn.onclick = closeMenu
transparent.addEventListener('click', closeMenu)

// Hide Menu CSS styling
function closeMenu() {
    menu.style.visibility = "hidden"
    menu.style.opacity = "0"
    menuItems.style.left = "-329px"
}

function openMenu() {
        menu.style.left = "0"
        menu.style.visibility = "visible"
        menu.style.opacity = "1"
        menuItems.style.left = "0"
    
} 

// End Toggle Menu

// Start Sub-Menu Toggle

let angleUp = document.getElementById("angle-up")
let angleDown = document.getElementById("angle-down")
let subMenu = document.getElementById("sub-menu")

angleDown.addEventListener('click', openSub)
angleUp.addEventListener('click', closeSub)

function openSub() {
    subMenu.style.visibility = 'visible'
    subMenu.style.opacity = '1'
    angleDown.style.display = "none"
    angleUp.style.display = 'block'
}

function closeSub() {
    subMenu.style.visibility = 'hidden'
    subMenu.style.opacity = '0'
    angleDown.style.display = "block"
    angleUp.style.display = 'none'
    
}

// End Sub-Menu Toggle


