// MObile heading
let x = $(".wrap-menu-mobile");
$(".open-btn").on("click", function () {
  x.css("left", "-215px");
});

$(".close-btn").on("click", function () {
  x.css("left", "-448px");
});

// Owl Carousel
$("#first-banner").owlCarousel({
  navText: [
    // button nav
    `<span aria-label= "Previous">
        <i class="fa-solid fa-chevron-left"></i>
      </span>`,

    `<span aria-label= "Next">
        <i class="fa-solid fa-chevron-right"></i>
      </span>`,
  ],
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#second-banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 8000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
