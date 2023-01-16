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

let angleUp = document.querySelectorAll(".angle-up")
let angleDown = document.querySelectorAll(".angle-down")
let subMenu = document.querySelectorAll(".sub-menu")
let lis = document.querySelectorAll('.sub-li')

for (let i = 0; i <angleDown.length; i++) {
    angleDown[i].addEventListener('click', openSub)
    angleUp[i].addEventListener('click', closeSub)

    function openSub() {
            angleDown[i].style.display = "none"
            angleUp[i].style.display = 'block'
            subMenu[i].style.height = '135px'
            for (let i = 0 ; i < lis.length; i++) {
                lis[i].style.marginBottom = '20px'
                
            }
        }

function closeSub() {
    angleDown[i].style.display = "block"
    angleUp[i].style.display = 'none'


    for (let i = 0 ; i < lis.length; i++) {
        lis[i].style.marginBottom = '0'
        subMenu[i].style.height = '0'
    }
}
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



yearly.addEventListener('click', function () {
    yearly.classList.add('selected')
    monthly.classList.remove('selected')
    monthly.classList.remove('active')
    yearlyOffer.classList.add('visible')
yearlyOffer.classList.remove('hidden')
monthlyOffer.classList.add('hidden')
})

window.onload = function () {
    monthlyOffer.classList.add('visible')
    monthlyOffer.classList.remove('hidden')

}

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
    if (currentScroll > 900    ) {
        target.style.opacity = '1';
        target.style.visibility = 'visible';
    }  else if (document.body.scrollTop === 0 ) {
        target.style.opacity = '0';
        target.style.visibility = 'hidden';

    } else {
        target.style.opacity = '0';
        target.style.visibility = 'hidden';
    }
}

// Call the function on scroll
document.addEventListener('scroll', displayOnScroll);

// end sroll 

const images = document.querySelectorAll('.animated-image');

images.forEach(image => {
    image.style.animationDelay = `${Math.random() * 8}s`;
    // image.style.top = `${(Math.random() * 10)}px`;
});

// number counter

let counters = document.getElementsByClassName('num-counter')

for (let i = 0;i < counters.length; i++ ) {
    let  originalValue = counters[i].innerHTML
    counters[i].innerHTML = 0

    const start = setInterval(() => {
            
            if (counters[i].innerHTML <= originalValue) {
                ++counters[i].innerHTML
            }
    }, 100);
    

}



/////////////////////////////////



window.onscroll = function() {
    var header = document.querySelector('.main-header');
    if (window.pageYOffset >= 800) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };


  function increaseAndDecreaseWidth() {
    var element = document.querySelector('.cl');
    var width = element.offsetWidth;

    if (width <= 200 ) {
        element.style.width = width + 1 + 'px';
        ++width
    } else if (width === 201 ) {
        element.style.opacity = 0
        width = 0;
        console.log(width)
        return
        
    }
    setTimeout(increaseAndDecreaseWidth, 10);

}

increaseAndDecreaseWidth();
