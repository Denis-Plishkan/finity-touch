import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function thesisSwiper() {
  let swiper = new Swiper(".thesis__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 260,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: -80,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}

thesisSwiper();


function teamSwiper() {
  let swiper = new Swiper(".team__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 5,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: -140,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}

teamSwiper();

function cardsSwiper() {
  let swiper = new Swiper(".cards__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 320,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

cardsSwiper();


function thesSwiper() {
  let swiper = new Swiper(".thes__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 320,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

thesSwiper();

