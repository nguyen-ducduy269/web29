// MObile heading
let x = $(".wrap-menu-mobile");
$(".open-btn").on("click", function () {
  x.css("left", "0");
});

$(".close-btn").on("click", function () {
  x.css("left", "-350%");
});

// Owlcarousel
$("#middle-image").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$("#layer").owlCarousel({
  navText: [
    // button nav
    `<span class="owl-prev">
        <i class="fa-solid fa-chevron-left"></i>
      </span>`,

    `<span class="owl-next">
        <i class="fa-solid fa-chevron-right"></i>
      </span>`,
  ],
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
