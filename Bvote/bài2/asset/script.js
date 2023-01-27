let x = $(".option-content");
$(".open").on("click", function () {
  x.css("left", "0");
});
$(".close").on("click", function () {
  x.css("left", "-330px");
});

$("#banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  nav: true,
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 10000,
  responsive: {
    500: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
    1400: {
      items: 6,
    },
  },
});
