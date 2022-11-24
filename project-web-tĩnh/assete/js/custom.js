//Banner
$("#banner").owlCarousel({
  loop: true, // vòng lặp các phần tử
  margin: 10,
  nav: false, // navigation
  dots: false, // chấm tròn chuyển trang
  autoplay: true,
  autoplayTimeout: 3000,
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

//Limit Time Offer
$("#limit-time").owlCarousel({
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
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Xử lý menu mobile
$(".open-btn").on("click", function () {
  let x = $(".wrap-menu-mobile");
  x.css("left", "0");
});

$(".close-btn").on("click", function () {
  let x = $(".wrap-menu-mobile");
  x.css("left", "-70%");
});
