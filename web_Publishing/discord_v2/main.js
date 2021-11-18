'use strict';

var navbar = document.querySelector(`#main-header`);
var navbarHeight= navbar.getBoundingClientRect().height;
var createOpacity = document.createAttribute('display');
createOpacity.value = "0.1";

document.addEventListener("scroll", () => {
    console.log(`navbar : ` + navbarHeight);
    if(window.scrollY > navbarHeight) {
        navbar.style.opacity = "0.1";
    } else {
        navbar.style.opacity = "1";
    }
}, true);