window.addEventListener("scroll", function () {
  let element = document.querySelector(".img-scroll");
  let content = element.getBoundingClientRect().top;
  let display = window.innerHeight / 2;

  if (content < display) {
    element.classList.add("img-scroll-active");
  }
});
window.addEventListener("scroll", function () {
  let element = document.querySelector(".content-text");
  let content = element.getBoundingClientRect().top;
  let display = window.innerHeight / 2;

  if (content < display) {
    element.classList.add("content-text-active");
  }
});
