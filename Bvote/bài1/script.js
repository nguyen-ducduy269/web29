let x = $(".menu");
$(".open-btn").on("click", function () {
  x.css("left", "0");
});

$(".close-btn").on("click", function () {
  x.css("left", "-251px");
});
// Owlcarousel
$("#activity-image").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  // autoplay: true,
  // autoplayTimeout: 10000,
  responsive: {
    767: {
      items: 1,
    },
    991: {
      items: 2,
    },
    1350: {
      items: 2,
    },
  },
});

$("#banner").owlCarousel({
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
  // autoplay: true,
  // autoplayTimeout: 10000,
  responsive: {
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
