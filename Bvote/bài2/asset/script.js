let x = $(".option-content");
$(".open").on("click", function () {
  x.css("left", "0");
});
$(".close").on("click", function () {
  x.css("left", "-330px");
});

$("#act-image").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    100: {
      items: 1,
    },
    500: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});

$("#banner").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 10000,
  responsive: {
    300: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 3,
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
