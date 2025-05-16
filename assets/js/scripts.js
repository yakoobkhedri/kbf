// mobile menu

let mobileMenu=document.getElementById('mobileMenu');
let mobileMenuLi=Array.from(document.querySelectorAll('#mobileMenu > li.drop'))
let hamIcon=document.getElementById('hamIcon');
let overlay=document.getElementById('overlay');

hamIcon.addEventListener('click',function () {
    mobileMenu.classList.toggle('active');
    overlay.classList.add('active');
});
overlay.addEventListener('click',function () {
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active');
})
mobileMenuLi.forEach((item)=>{
    item.addEventListener('click',function () {
        item.querySelector('ul').classList.toggle('active');
    })
})
// swiper
var banner = new Swiper(".banner", {
    loop: true,
    autoplay:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".smallImgs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints:{
        1200:{
            slidesPerView: 7,
        },
        768:{
            slidesPerView: 4,
        },
        576:{
            slidesPerView: 3,
        },
        400:{
            slidesPerView: 3,
        },
    }
});
var swiper2 = new Swiper(".gallery", {
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
var tabs = new Swiper(".tabs", {
    loop: true,
    autoplay:true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        1200:{
            slidesPerView: 7,
        },
        992:{
            slidesPerView: 5,
        },
        576:{
            slidesPerView: 4,
        },
        400:{
            slidesPerView: 2,
            spaceBetween:2
        },
    }
});
// aos
AOS.init();