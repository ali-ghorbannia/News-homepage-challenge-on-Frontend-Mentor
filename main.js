import './style.css'


const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const closemenu = document.querySelector(".menu-close");
const openmenu = document.querySelector(".menu-open");


navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active"); // Toggle the 'active' class
  closemenu.classList.toggle("active");
  openmenu.classList.toggle("active");
});

