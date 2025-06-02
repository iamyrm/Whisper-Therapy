const sr = ScrollReveal({
    delay: 200,
    distance: '20px',
    duration: 600,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});

sr.reveal('#header, #hero-section, #about, #services, #success-stories, #book-now, #contact, #footer');

var swiper = new Swiper(".services-slider-container", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        }
    },
});

var swiper = new Swiper(".stories-slider-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});
