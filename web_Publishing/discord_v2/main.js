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

function showTop() {
    topMenu.style.display = "grid";
    newMenu.style.display = "none";
    topTitle.innerText = "Top Bots";
    topDesc.innerText = "Top voted bots on Top.gg";
    topButton.style.background = "#FB567F";
    newButton.style.background = "#D3CECF";
    topButton.style.cursor = "normal";
    newButton.style.cursor = "pointer";
}

function showNew() {
    topMenu.style.display = "none";
    newMenu.style.display = "grid";
    topTitle.innerText = "New Bots";
    topDesc.innerText = "New bots on Top.gg";
    newButton.style.background = "#FB567F";
    topButton.style.background = "#D3CECF";
    topButton.style.cursor = "pointer";
    newButton.style.cursor = "normal";
}