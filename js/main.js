const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".dark-background");

if (burger) {
  burger.addEventListener("click", (e) => {
    e.preventDefault();

    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (document.body.classList.contains("body-overlay")) {
      document.body.classList.toggle("body-overlay");
    } else {
      document.body.classList.add("body-overlay");
    }
  });
}


// slider //

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2000, // 
    disableOnInteraction: false, 
  },
});


