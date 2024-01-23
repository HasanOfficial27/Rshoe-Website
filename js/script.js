$(document).ready(() => {
  $(".slick").slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    speed: 700,
    arrows: false,
    autoplay: true,
  });
});
/***/
const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  slidesPerView: 2,
  loop: true,
  autoplay: true,
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    999: {
      slidesPerView: 5,
    },
    1124: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: false,
    prevEl: false,
  },
  // And if we need scrollbar
  scrollbar: {
    el: false,
  },
});
