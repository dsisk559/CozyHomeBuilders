var navButton=document.getElementById("nav-toggle-button");function toggleNavDisplay(e){e.preventDefault(),document.getElementById("mainNavigation").classList.toggle("showNav")}navButton.addEventListener("click",toggleNavDisplay);var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var l,n=document.getElementsByClassName("slide"),s=document.getElementsByClassName("dot");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),l=0;l<n.length;l++)n[l].style.display="none";for(l=0;l<s.length;l++)s[l].className=s[l].className.replace(" active","");n[slideIndex-1].style.display="block",s[slideIndex-1].className+=" active"}showSlides(slideIndex);