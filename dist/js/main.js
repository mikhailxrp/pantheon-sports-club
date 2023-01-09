const navMenu = document.querySelector(".menu");
const navLinks = navMenu.querySelectorAll("a");
const navMenuTablet = document.querySelector(".menu-tablet");
const navLinksTablet = navMenuTablet.querySelectorAll("a");

// main-menu
for (link of navLinks) {
  link.addEventListener("click", function () {
    for (link of navLinks) {
      link.classList.remove("active");
    }
    this.classList.add("active");
  });
}

// tablet-menu
for (link of navLinksTablet) {
  link.addEventListener("click", function () {
    for (link of navLinksTablet) {
      link.classList.remove("active-tablet");
    }
    this.classList.add("active-tablet");
  });
}

// mobile menu
const menuBtn = document.querySelector("#mobile-btn");
const mobileNavIcon = document.querySelector("#mobile-nav-icon");
const mobileNav = document.querySelector("#mobile-nav");
const overlay = document.querySelector("#overlay");

const links = mobileNav.querySelectorAll("a");

menuBtn.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  overlay.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    turnOfMobileNav();
  });
});

overlay.addEventListener("click", () => {
  turnOfMobileNav();
});

function turnOfMobileNav() {
  if (overlay.classList.contains("active")) {
    overlay.classList.remove("active");
  }
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
  }
  if (mobileNavIcon.classList.contains("active")) {
    mobileNavIcon.classList.remove("active");
  }
  if (document.body.classList.contains("no-scroll")) {
    document.body.classList.remove("no-scroll");
  }
}

$(document).ready(function () {
  $("[data-modal]").on("click", function () {
    $("#modal-contact").fadeIn("slow");
    $("#overlay").addClass("active");
    $("body").addClass("no-scroll");
  });

  $("#close").on("click", function () {
    $("#modal-contact").fadeOut("slow");
    $("#overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  $("#overlay").on("click", function () {
    $("#modal-contact").fadeOut("slow");
    $("#success").fadeOut("slow");
  });

  $("#modal-form").on("submit", function (e) {
    e.preventDefault();
    $("#success").fadeIn("slow");
    $("#modal-contact").fadeOut("slow");
  });

  $("#success-close").on("click", function () {
    $("#success").fadeOut("slow");
    $("#overlay").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  // slider
  const owlOne = $("#owl-one");
  owlOne.owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    center: true,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        dots: false,
      },
      500: {
        items: 2,
        nav: false,
        loop: true,
        dots: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
        dots: false,
      },
      1200: {
        items: 4,
        nav: false,
        loop: true,
        dots: false,
      },
    },
  });

  // nav-slider-one
  $(".nav-btn-prev").click(function () {
    owlOne.trigger("next.owl.carousel", [300]);
  });
  $(".nav-btn-next").click(function () {
    owlOne.trigger("prev.owl.carousel", [300]);
  });

  // slider-two
  const owlTwo = $("#owl-two");
  owlTwo.owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    center: true,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        dots: false,
      },
      500: {
        items: 2,
        nav: false,
        loop: true,
        dots: false,
      },
      1200: {
        items: 3,
        nav: false,
        loop: true,
        dots: false,
      },
    },
  });

  //  nav-slider-two
  $(".nav-btn-prev-two").click(function () {
    owlTwo.trigger("next.owl.carousel", [300]);
  });
  $(".nav-btn-next-two").click(function () {
    owlTwo.trigger("prev.owl.carousel", [300]);
  });

  //  coaches-gallery
  const owlThree = $(".owl-carousel");
  owlThree.owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      500: {
        items: 2,
        nav: false,
        loop: true,
      },
      1200: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
  //  nav-slider-three
  $(".coaches__nav-btn-prev").click(function () {
    owlThree.trigger("next.owl.carousel", [300]);
  });
  $(".coaches__nav-btn-next").click(function () {
    owlThree.trigger("prev.owl.carousel", [300]);
  });
});
