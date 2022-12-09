// MObile heading
let x = $(".wrap-menu-mobile");
$(".open-btn").on("click", function () {
  x.css("left", "0");
});

$(".close-btn").on("click", function () {
  x.css("left", "-250%");
});

// Owlcarousel
$(".owl-carousel").owlCarousel({
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
  autoplayTimeout: 7000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

// $("#layer-owl").owlCarousel({
//   navText: [
//     // button nav
//     `<span aria-label= "Previous">
//         <i class="fa-solid fa-chevron-left"></i>
//       </span>`,

//     `<span aria-label= "Next">
//         <i class="fa-solid fa-chevron-right"></i>
//       </span>`,
//   ],
//   loop: true,
//   margin: 10,
//   nav: true,
//   autoplay: true,
//   autoplayTimeout: 10000,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 5,
//     },
//   },
// });
