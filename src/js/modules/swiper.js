import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function nftSwiper() {
  let swiper = new Swiper(".nft__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 320,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 300,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 400,
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

nftSwiper();

function cardUser() {
  let swiper = new Swiper(".cardUser__swiper", {
    spaceBetween: 24,
    slidesPerview: 'auto',
    loop: true,
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 320,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 300,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 400,
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

cardUser();