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

//bots-items display control

var topMenu = document.querySelector(`#main > section.discord-bots > article:nth-child(4)`);
var newMenu = document.querySelector(`#main > section.discord-bots > article:nth-child(5)`);
var topTitle = document.querySelector(`#main > section.discord-bots > div.bots__text > a`);
var topDesc = document.querySelector(`#main > section.discord-bots > div.bots__text > h2`);
var topButton = document.querySelector('.discord__filter--top');
var newButton = document.querySelector('.discord__filter--new');
var toggleButton = document.querySelector('.discord-filter__toggle');

document.addEventListener("DOMContentLoaded", () => {
    topButton.click();
})

function showTop() {
    toggleButton.classList.add("toggle--right");
    toggleButton.classList.remove("toggle--left");
    topButton.style.cursor = "default";
    newButton.style.cursor = "pointer";
    document.addEventListener("onmouseover", () => {
        newButton.style.background = "#BDBABA";
    }, false)
}

function showNew() {
    toggleButton.classList.add('toggle--left');
    toggleButton.classList.remove("toggle--right");
    newButton.style.cursor = "default";
    topButton.style.cursor = "pointer";
    document.addEventListener("onmouseover", () => {
        topButton.style.background = "#BDBABA";
    }, false)

}