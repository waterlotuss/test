const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 10 + 0.1
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

// Sticky Navigation Bar
window.onscroll = function () {
  stickyNav();
};
const mynavbar = document.querySelector(".nav");
let sticky = mynavbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    mynavbar.classList.add("fixed");
  } else {
    mynavbar.classList.remove("fixed");
  }
}
