var buy = document.querySelectorAll(".item-buy");
var i;
var cart = document.querySelector(".cart-popup");
var closeCart = document.querySelector(".close");

for (i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function(event) {
  event.preventDefault();
  cart.classList.add("cart-popup-show");
});
}

closeCart.addEventListener("click", function(event) {
  event.preventDefault();
  cart.classList.remove("cart-popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (cart.classList.contains("cart-popup-show")) {
      cart.classList.remove("cart-popup-show");
    }
  }
});

var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".close-feedback");
var form = popup.querySelector(".feedback-form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-popup-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-popup-show");
  popup.classList.remove("form-error");
});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-popup-show")) {
      popup.classList.remove("feedback-popup-show");
      popup.classList.remove("form-error");
    }
  }
});

var mapBtn = document.querySelector(".map-popup");
var map = document.querySelector(".map");
var closeMap = document.querySelector(".close-map");

mapBtn.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("show-map");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.remove("show-map");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("show-map")) {
      map.classList.remove("show-map");
    }
  }
});
