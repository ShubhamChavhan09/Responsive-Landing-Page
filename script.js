const element = document.querySelector(".mobile-navigation");
const close = document.querySelector(".close-button");
const menu = document.querySelector(".menu-button");

menu.addEventListener("click", ()=> {
  if (element.classList.contains("mobile-navigation_open")) {
    element.classList.remove("mobile-navigation_open");
  } else {
    element.classList.add("mobile-navigation_open");
  }
});

close.addEventListener("click", ()=> {
  if (element.classList.contains("mobile-navigation_open")) {
    element.classList.remove("mobile-navigation_open");
  } else {
    element.classList.add("mobile-navigation_open");
  }
});
