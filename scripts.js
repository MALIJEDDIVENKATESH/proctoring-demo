//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
//     setInterval(function () {
//         var size = randomValue(sArray);
//         $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
//         $('.individual-bubble').animate({
//             'bottom': '100%',
//             'opacity': '-=0.7'
//         }, 4000, function () {
//             $(this).remove()
//         });
//     }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});



const swiper = new Swiper('#testimonials .swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerGroup:4,
    slidesPerView: 4,
    spaceBetween:570,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup:1,

            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
              slidesPerGroup:2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -50,
              slidesPerGroup:2,

            },
            1440:{
                
              slidesPerView: 4,
              spaceBetween: 10,

            }
          },
  
    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
});
  

var tabEls = document.querySelectorAll('#testimonials .nav-link[data-bs-toggle="tab"]');
tabEls.forEach((tabEl)=>{
  
tabEl.addEventListener('shown.bs.tab', function (event) {
    let currentlink=event.target.getAttribute('href');
    let swiper=document.querySelector(`${currentlink} .swiper-container`);
    swiper.swiper.update();


})
}
)

