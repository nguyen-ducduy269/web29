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
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 10000,
  responsive: {
    200: {
      items: 1,
    },
    365: {
      items: 3,
    },
    767: {
      items: 4,
    },
    991: {
      items: 5,
    },
    1199: {
      items: 5,
    },
    1350: {
      items: 6,
    },
    1496: {
      items: 6,
    },
  },
});
