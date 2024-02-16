const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger) {
  burger.addEventListener("click", (e) => {
    e.preventDefault();

    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    if (document.body.classList.contains("body-overlay")) {
      document.body.classList.toggle("body-overlay");
    } else {
      document.body.classList.add("body-overlay");
    }
  });
}
