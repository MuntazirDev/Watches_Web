/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
console.log('ok')

    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = (n) =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')

    // navLink active

    navLink.forEach(i=>i.classList.remove('active-link'))
    n.classList.add('active-link')
}
navLink.forEach(n => n.addEventListener('click',()=>{linkAction(n)}))

/*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () =>{
//     const header = document.getElementById('header')
//     // Add a class if the bottom offset is greater than 50 of the viewport
//     this.scrollY >= 50 ? header.classList.add('scroll-header') 
//                        : header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

/*=============== Initialize Swiper  ===============*/

let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween:30,
    loop:'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let newSwiper = new Swiper(".new-swiper", {
spaceBetween:24,
loop:'true',
breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
},
pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
  clickable: true,
},

});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollDown = window.scrollY

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== Gsap  ===============*/

/*== LOADER ==*/

gsap.from('.loader-wrapper',2,{
  scale:0.8,
  ease:'power1.inOut',
});

gsap.from(".loader",2,{
  top:'100%',
  ease:"power3,inOut",
})

gsap.to(".pre-loader,.loader-wrapper",1,{
  scale:1.5,
  opacity:0,
  display:"none",
  ease:"power3,inOut",
  delay:2,
},"-=1")

/*== nav ==*/
gsap.from('.nav',1,{
  opacity:0,
  ease:"power2,inOut",
  delay:1.5,
},"-=1.4")

/*== WATCh ==*/
gsap.from(".watch",1,{
  // wdith:'0%',
  x:'-100%',
  opacity:0,
  ease:"power3,inOut",
  delay:3.5,
})

gsap.from('.L1',1.3,{
  y:'-100%',
  ease:"power3,inOut",
  delay:4.9,
})
gsap.from('.L2',1.3,{
  y:'100%',
  ease:"power3,inOut",
  delay:4.8,
})

gsap.from('.L3',1.3,{
  x:'-200%',
  opacity:0,
  ease:"power3,inOut",
  delay:4.4,
})

gsap.from('.L4',1.3,{
  x:'200%',
  opacity:0,
  ease:"power3,inOut",
  delay:4.7,
})

gsap.from('.L5',1.3,{
  y:'200%',
  x:'200%',
  opacity:0,
  ease:"power3,inOut",
  delay:4.6,
})

gsap.from('.L6',1.3,{
  y:'-200%',
  x:'-200%',
  // opacity:0,
  ease:"power3,inOut",
  delay:4.5,
})

gsap.to('.watch',1,{
  scale:1.5,
  opacity:0,
  display:"none",
  ease:"power3,inOut",
  delay:7,
  onComplete:function() {
    document.body.style.overflow='initial';
    // document.querySelector('.main').classList.remove('hiddenAll');
    // document.getElementById('cart').classList.remove('hiddenAll');
    // document.querySelector('.footer ').classList.remove('hiddenAll');

    // document.querySelector('.main').style.display='block';
    // document.getElementById('cart').classList.remove('hiddenAll');
    // document.querySelector('.footer ').classList.remove('hiddenAll');
  }
},"-=1")

/*== MAIN ==*/
gsap.to(".main, .cart,.footer",1,{
  
  display:"block",
  ease:"power3,inOut",
  delay:8,
})

gsap.from(".home, .featured",1,{
  x:'100%',
  opacity:0,
  display:"block",
  ease:"power3,inOut",
  delay:8,
})

gsap.from(".home__img-bg",0.5,{
  width: '0px',
  ease:"power1,inOut",
  delay:9,
})

/*=============== Gsap & ScrollTrigger ===============*/

gsap.registerPlugin(ScrollTrigger);

/*== featured ==*/

gsap.from(".featured__card",{
  x:'-200%',
  duration:1,
  opacity:0,
  ease:"power3,inOut",
  scrollTrigger:{
    trigger:'.featured  ',
    start:'top center',
    // markers:'true',
  }
})

let tl1=gsap.timeline({
  scrollTrigger:{
      trigger:'.story__container',
      start:'60% 90%',
      end:'90% center',
      // scrub:true,
      // markers:true,
      
  }
})
tl1.from(".story__square",{
  width:0,
  duration:0.5,
  opacity:0,
  ease:"power3,inOut",
})

tl1.from(".story__img",{
  x:'-100%',
  duration:0.5,
  opacity:0,
  ease:"power3,inOut",
})

/*== Products  ==*/
gsap.from(".products__card",{
  height:'-10%',
  duration:1,
  opacity:0,
  ease:"power3,inOut",
  scrollTrigger:{
    trigger:'.products   ',
    start:'40% 90%',
    end:'60% center',
    // markers:'true',
  }
})

/*== testimonial  ==*/
let tl2=gsap.timeline({
  scrollTrigger:{
      trigger:'.testimonial__container ',
      start:'60% 90%',
      end:'80% center',
      // scrub:true,
      // markers:true,
      
  }
})

tl2.from(".testimonial__square",{
  width:0,
  duration:0.5,
  opacity:0,
  ease:"power3,inOut",
})

tl2.from(".testimonial__img",{
  x:'100%',
  duration:0.5,
  opacity:0,
  ease:"power3,inOut",
})

/*== new  ==*/

gsap.from(".new__container",{
  x:'200%',
  duration:1,
  opacity:0,
  ease:"power3,inOut",
  scrollTrigger:{
    trigger:'.new__container  ',
    start:'60% 90%',
    end:'80% center',
    // markers:'true',
  }
})

/*== CHANGE BACKGROUND HEADER Gsap ==*/

ScrollTrigger.create({
  trigger:'body',
  start:'2% 6%',
  // markers:'true',
  toggleClass:{targets:'.header',className:'scroll-header'}
})
