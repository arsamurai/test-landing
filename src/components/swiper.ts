import Swiper from "swiper"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

import "swiper/swiper-bundle.css"

const swipers = {
  formsSwiper: () =>
    new Swiper("#forms-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      modules: [Autoplay, EffectFade, Pagination],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: "#forms-swiper-pagination",
        clickable: true,
      },
    }),
  modelsSwiper: () =>
    new Swiper("#models-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 2.8,
        },
        2500: {
          slidesPerView: 3,
        },
      },
    }),
  whyJoinUsSwiper: () =>
    new Swiper("#why-join-us-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    }),
  streamingSwiper: () =>
    new Swiper("#streaming-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2.25,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3.25,
        },
        1537: {
          slidesPerView: 4,
        },
        2500: {
          slidesPerView: 5,
        },
      },
    }),
}

document.addEventListener("DOMContentLoaded", () => {
  swipers.formsSwiper()
  swipers.modelsSwiper()
  swipers.whyJoinUsSwiper()
  swipers.streamingSwiper()
})
