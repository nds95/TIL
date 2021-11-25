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
    topTitle.innerText = "Top Bots";
    topDesc.innerText = "Top voted bots on Top.gg";
    toggleButton.classList.add("toggle--right");
    toggleButton.classList.remove("toggle--left");
    newButton.classList.add("discord__filter--new-hover");
    topButton.classList.remove("discord__filter--top-hover");
};

function showNew() {
    topTitle.innerText = "New Bots";
    topDesc.innerText = "New bots on Top.gg";
    toggleButton.classList.add('toggle--left');
    toggleButton.classList.remove("toggle--right");
    topButton.classList.add("discord__filter--top-hover");
    newButton.classList.remove("discord__filter--new-hover");
};

//discord-title click event

var discordBots = document.querySelector(`#main > section.discord-bots > div.discord__title > a:nth-child(1)`);
var discordServers = document.querySelector(`#main > section.discord-bots > div.discord__title > a:nth-child(2)`);
var discordBorder = document.querySelector(`.discord-title__border`);
// var botsContent = document.querySelector(`#main > section.discord-bots > article:nth-child(4)`);
// var serversContent = document.querySelector(`#main > section.discord-bots > article:nth-child(5)`);

var botsContent = document.querySelector('.bots-content');

// discordServers.addEventListener("click", () => {
//     discordBorder.style.width = "139px";
//     discordBorder.style.transform = "translateX(145px)";
//     serversContent.style.display = "grid";
//     botsContent.style.display = "none";
// })

// discordBots.addEventListener("click", () => {
//     discordBorder.style.width = "112px";
//     discordBorder.style.transform = "translateX(0px)";
//     botsContent.style.display = "grid";
//     serversContent.style.display = "none";
// })

//bots, servers content view