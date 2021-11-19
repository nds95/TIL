'use strict';

//global variable

//navbar opacity control

var navbar = document.querySelector(`.opacity`);
var navbarHeight= navbar.getBoundingClientRect().height;

function calcHeight(height) {
    var result = parseFloat(height / 90).toFixed(4);
    return result;
};

document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.style.opacity = "1";
    } else {
        navbar.style.opacity = calcHeight(window.scrollY).toString();
    }
}, true);
//navbar search input display controll

var navSearchInput = document.querySelector('.header__search > input');
var searchInput = document.querySelector('.search--input');

document.addEventListener("scroll", () => {
    if(window.scrollY > 179) {
        navSearchInput.classList.add('appear');
        navSearchInput.classList.remove('disappear');
    } else {
        navSearchInput.classList.remove('appear');
        navSearchInput.classList.add('disappear');
    }
}, true);

document.addEventListener("scroll", () => {
    if(window.scrollY > 179) {
        searchInput.classList.add('disappear');
        searchInput.classList.remove('appear');
    } else {
        searchInput.classList.remove('disappear');
        searchInput.classList.add('appear');
    }
})