const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);

  const date = new date();
  const hours = date.getHours();
  if(hours < 12){
    greeting.innerText = `Good Morning ${text}`;
  } else {
    greeting.innerText = `Good evening ${text}`;
  }
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    // currentUser 값이 없을 때
    askForName();
  } else {
    // currentUser 값이 있을 때
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();