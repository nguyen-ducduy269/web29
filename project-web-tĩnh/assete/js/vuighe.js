// MObile heading
let x = $(".wrap-menu-mobile");
$(".open-btn").on("click", function () {
  x.css("left", "-215px");
});

$(".close-btn").on("click", function () {
  x.css("left", "-448px");
});

$(".owl-carousel").owlCarousel({
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
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
