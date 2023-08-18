const nav = document.querySelector('nav')
const close_icon = document.querySelector('.close-menu')
const open_icon = document.querySelector('.open-menu')
const header = document.querySelector('header')
const aTags = document.querySelectorAll('nav ul li a')
const img_resume = document.querySelector('.img-resume') 
const overlay = document.querySelector('.overlay')
const header_logo = document.querySelector('.header-logo')
const header_logoANchor = document.querySelector('.header-logo a')
const article = document.querySelector('.article')
const articleClicking = document.querySelector('.clicking')
const containerPop = document.querySelector('.containerPop')
const cancelContainerPop = document.querySelector('.cancel-btn')
const footer_disclaimer = document.querySelector('.footer-disclaimer')
const pItems = document.querySelectorAll('.pItem')
const btnP_toggle = document.querySelectorAll('.pToggleBtns-wrapper button')


const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((eachMenu)=>{
  eachMenu.addEventListener('click',()=>{
    menuLinks.forEach(removeEach=>removeEach.classList.remove('active-links'))
    eachMenu.classList.add('active-links')
  })
})



const openMenu_func = ()=>{
  nav.style.cssText = `top:0;`
}
const closeMenu_func = ()=>{
  nav.style.cssText =` top:-950px;background-color:#007bff;`
}
open_icon.addEventListener('click',openMenu_func)
close_icon.addEventListener('click',closeMenu_func)

window.addEventListener('scroll',()=>{
  const pexells = window.scrollY;
  if(pexells > 50){
    header.classList.add('header-scroll')
    header_logo.style.cssText = `color:black;border:1px solid white;`
    // nav.style.cssText = `backdrop-filter: blur(10px);background-color: rgba(6, 17, 42,0);`
    // adding black color to a tags once they reach 50 pexels 
    aTags.forEach(colorLoop=>{
      colorLoop.style.cssText = `color:white;`
    })
    // hover effect for each a tags ... 
    aTags.forEach(loopAtags=>{
      loopAtags.addEventListener('mouseenter',(e)=>{
        e.target.style.color = 'var(--secondary-color)'
      })
    })
    aTags.forEach(loopAtags=>{
      loopAtags.addEventListener('mouseleave',(e)=>{
        e.target.style.color = 'rgba(255, 255, 255, 0.5)'
      })
    })
    // console.log(header)
  }else{ 
    header.classList.remove('header-scroll');
    header_logo.style.cssText = `color:white;border:1px solid white;`
    // removing black color to a tags once they reach 50 pexels 
    aTags.forEach(colorLoop=>{
      colorLoop.style.cssText = `color: rgba(255, 255, 255, 0.5);`
    })
    // hover effect for each a tags ... 
    aTags.forEach(loopAtags=>{
      loopAtags.addEventListener('mouseenter',(e)=>{
        e.target.style.color = 'white'
      })
    })
    aTags.forEach(loopAtags=>{
      loopAtags.addEventListener('mouseleave',(e)=>{
        e.target.style.color = 'rgba(255, 255, 255, 0.5)'
      })
    })
  }
})


btnP_toggle.forEach(eachBtn=>{
  eachBtn.addEventListener('click',()=>{
    const category = eachBtn.getAttribute('data-category')
    console.log(category)
    // Remove active class from all buttons and add it to the clicked button
    btnP_toggle.forEach(btn => btn.classList.remove('activeP'));
    eachBtn.classList.add('activeP');

    pItems.forEach(items=>{
      if(category === 'all' || items.classList.contains(category)){
        items.classList.remove('hide')
      }else{
        items.classList.add('hide')
        
      }
      console.log(items)
    })
  })
})


img_resume.addEventListener('mouseenter',()=>{
  overlay.style.cssText = `left:0`
})
img_resume.addEventListener('mouseleave',()=>{
  overlay.style.cssText = `left:-800px`
})



articleClicking.addEventListener('click',()=>{
  article.style.display = 'none'
})
setTimeout(()=>{
  article.style.display = 'none'
},20000)

function cancelContainerPop_func(){
  containerPop.style.display = 'none'
}
function reviewContainerPop_func(){
  containerPop.style.display = 'flex'
}

setTimeout(()=>{
  reviewContainerPop_func()
},10000)

cancelContainerPop.addEventListener('click',cancelContainerPop_func)
footer_disclaimer.addEventListener('click',reviewContainerPop_func)


// Text to be typed
const textToType = "  Augustine Chibueze A Front-end Web Developer!!!";

// Delay between each character (in milliseconds)
const typingDelay = 100;

// Index to keep track of the characters being displayed
let charIndex = 0;

// Function to simulate typing animation
function typeText() {
  const typingTextElement = document.querySelector('.typing-text');
  const currentText = textToType.slice(0, charIndex);
  typingTextElement.textContent = currentText;

  if (charIndex < textToType.length) {
    charIndex++;
    setTimeout(typeText, typingDelay);
  }
}

// Start the typing animation when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
  typeText();
});



// // Text to be typed
// const textToType = " to my website!,I am Augustine Chibueze A Front-end Web Developer!!!";

// // Delay between each character (in milliseconds)
// const typingDelay = 100;

// // Index to keep track of the characters being displayed
// let charIndex = 0;

// // Function to simulate typing animation
// function typeText() {
//   const typingTextElement = document.querySelector('.typing-text');
//   const currentText = textToType.slice(0, charIndex);
//   typingTextElement.textContent = currentText;

//   if (charIndex < textToType.length) {
//     charIndex++;
//     setTimeout(typeText, typingDelay);
//   }
// }

// // Function to add a line break at a specific position in a string
// function addLineBreak(str, breakPosition) {
//   if (breakPosition >= 0 && breakPosition <= str.length) {
//     return str.slice(0, breakPosition) + '<br>' + str.slice(breakPosition);
//   } else {
//     return str;
//   }
// }

// // Start the typing animation when the page is loaded
// document.addEventListener('DOMContentLoaded', function() {
//   typeText();

//   // Add a line break after the 30th character in the textToType
//   const modifiedText = addLineBreak(textToType, 30);
//   textToType = modifiedText;

//   // Restart the typing animation with the updated text
//   charIndex = 0;
//   setTimeout(typeText, typingDelay * 30); // Add a slight delay before restarting the typing animation
// });


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  autoplay:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop:{
    loop:true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});