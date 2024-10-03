window.onscroll = function () {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav ul li a");

  if (window.scrollY >= 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    header.style.backdropFilter = "blur(10px)";
    header.style.webkitBackdropFilter = "blur(10px)"; // For Safari

    // Change the color of the list items
    navLinks.forEach((link) => {
      link.style.color = "black"; // Text color with glass effect
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";

    // Revert the color of the list items
    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  }
};
// window.onscroll = function () {
//   const header = document.getElementById("header");
//   const navLinks = document.querySelectorAll(".nav ul li a");

//   if (window.scrollY >= 100) {
//     header.classList.add("scrolled");
//     navLinks.forEach((link) => {
//       link.classList.add("scrolled-link");
//     });
//   } else {
//     header.classList.remove("scrolled");
//     navLinks.forEach((link) => {
//       link.classList.remove("scrolled-link");
//     });
//   }
// };

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav");
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("hide");
    close.classList.toggle("hide");

    console.log("Clicked"); // Ensure the click event is firing
  });
});
