$(document).ready(function () {
  AOS.init({
    once: true,
    offset: 0,
    easing: "ease-in-out-cubic",
    duration: "300",
  });

  if ($(this).scrollTop() >= 42) {
    $(".header-nav").addClass("scrolled");
  } else {
    $(".header-nav").removeClass("scrolled");
  }
  $(window).on("load", function () {
    if ($(this).scrollTop() >= 42) {
      $(".header-nav").addClass("scrolled");
    } else {
      $(".header-nav").removeClass("scrolled");
    }
  });
  $(document).scroll(function () {
    if ($(this).scrollTop() >= $("#main").offset().top) {
      $(".back-top").addClass("active");
    } else {
      $(".back-top").removeClass("active");
    }
    if ($(this).scrollTop() >= 42) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
  $(".back-top").on("click", function () {
    $(".back-top").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

let x = $(".menu-respon");
$(".show__menu").on("click", function () {
  x.css("left", "0");
});
$(".close__menu").on("click", function () {
  x.css("left", "-250px");
});

$("#footer-details").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
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
