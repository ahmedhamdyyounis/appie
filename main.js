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


//Start slides
let imgOne = document.getElementById("img-one")
let imgTwo = document.getElementById("img-two")
let arrowLeft = document.getElementById("arrow-left")
let arrowRight = document.getElementById("arrow-right")
let slides = document.querySelector(".slides-wrapper")

// arrowLeft.addEventListener('click', function () {
//     imgOne.style.marginLeft = '-366px'

// })

// arrowRight.addEventListener('click', function () {
//     imgOne.style.marginLeft = '0'
// })

arrowRight.onclick = function () {
    imgOne.style.marginLeft = '100%'
    imgTwo.style.marginLeft = '-200%'

}
var clickCounter = 0;
arrowLeft.onclick= function() {
clickCounter++;
    if (clickCounter==1) {
    imgOne.style.marginLeft = '-100%'
    } else if (clickCounter==2) {
        imgTwo.style.marginLeft = '-100%'
        imgOne.style.marginLeft = '0'
        
    } else {
        imgTwo.style.marginLeft = '-200%'
    }
};
//End slides

// Start plan selection

let monthly = document.getElementById('monthly')
let yearly = document.getElementById('yearly')
let yearlyOffer = document.getElementById('yearly-offers')
let monthlyOffer = document.getElementById('monthly-offers')


monthly.addEventListener('click', function () {
    monthly.classList.add('selected')
    yearly.classList.remove('selected')
monthlyOffer.classList.add('visible')
monthlyOffer.classList.remove('hidden')
yearlyOffer.classList.add('hidden')
})

window.onload = monthly.click()


yearly.addEventListener('click', function () {
    yearly.classList.add('selected')
    monthly.classList.remove('selected')

    yearlyOffer.classList.add('visible')
yearlyOffer.classList.remove('hidden')
monthlyOffer.classList.add('hidden')

    
})

// End plan selection

// start scroll

class ScrlBtn {
    constructor() {
        // Bind the click event to the scrollUp function
        this.btn = document.querySelector('.scrl-btn');
        this.btn.addEventListener('click', this.scrollUp.bind(this));
    }

    scrollUp() {
        // Scroll to the top of the page with a smooth animation
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
}

// Initialize the ScrlBtn class
const scrollButton = new ScrlBtn();


function displayOnScroll() {
    // Get the target element
    const target = document.querySelector('.scrl-btn');

    // Get the current scroll position
    const currentScroll = window.pageYOffset;

    // Show the target element when the current scroll is greater than 50px
    if (currentScroll > 800) {
        target.style.opacity = '1';
        target.style.visibility = 'visible';
    } else {
        target.style.opacity = '0';
        target.style.visibility = 'hidden';

    }
}

// Call the function on scroll
window.addEventListener('scroll', displayOnScroll);

// end sroll 
