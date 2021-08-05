$(document).ready(function () {
  $(".owl-carousel.img-carousel").owlCarousel({
    // items: 1,
    margin: 14,
    lazyLoad: true,
    // autoWidth: true,
    center: false,
    nav: true,
    dots: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 4,
      },
      380: {
        items: 4,
      },
      520: {
        items: 5,
      },
      768: {
        items: 6,
      },
    },
  });
  $(".owl-carousel.video").owlCarousel({
    items: 1,
    merge: false,
    loop: false,
    margin: 10,
    video: true,
    dots: false,
    nav: true,
    navText: [
      "<div class='nav-btn--video prev-slide--video'></div>",
      "<div class='nav-btn--video next-slide--video'></div>",
    ],
    lazyLoad: false,
    video: true,
    videoWidth: 300,

    center: false,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
});
