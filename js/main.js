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
    animateIn: "flipInX",
    animateOut: "fadeOut",
    merge: true,
    loop: true,
    margin: 15,
    video: true,
    dots: true,
    nav: true,
    videoWidth: false,
    videoHeight: false,
    mouseDrag: true,
    navText: [
      "<div class='nav-btn--video prev-slide--video'></div>",
      "<div class='nav-btn--video next-slide--video'></div>",
    ],
    lazyLoad: false,
    center: true,
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
