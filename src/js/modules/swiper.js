import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function thesisSwiper() {
  let swiper = new Swiper(".thesis__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1500,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 260,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 248
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

thesisSwiper();

function partnersSwiper() {
  let swiper = new Swiper(".partners__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}

partnersSwiper();


function teamSwiper() {
  let swiper = new Swiper(".team__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1700,
    },
    navigation: {
      nextEl: '.team__swiper-next',
      prevEl: '.team__swiper-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
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
    autoplay: {
      delay: 1200,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 260,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 300,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 15,
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
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 250,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 303,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
}

thesSwiper();

