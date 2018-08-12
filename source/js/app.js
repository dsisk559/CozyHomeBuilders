var navButton = document.getElementById("nav-toggle-button");

function toggleNavDisplay(event) {
  event.preventDefault();

  var mainNav = document.getElementById("mainNavigation");

  mainNav.classList.toggle("showNav");
}

navButton.addEventListener("click", toggleNavDisplay);
// JavaScript
window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });
