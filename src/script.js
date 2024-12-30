const parent = document.querySelector("main");
const scrollYPerView = window.innerHeight;

parent.addEventListener("wheel", function (event) {
  event.preventDefault();

  if (event.deltaY > 0) {
    scrollDown();
  } else if (event.deltaY < 0) {
    scrollUp();
  }
});

function scrollUp() {
  const newScrollPosition = parent.scrollTop - scrollYPerView;
  parent.scrollTo({ top: newScrollPosition, behavior: "smooth" });
}

function scrollDown() {
  const newScrollPosition = parent.scrollTop + scrollYPerView;
  parent.scrollTo({ top: newScrollPosition, behavior: "smooth" });
}

const btnScrollUp = document.getElementById("scroll-up");
btnScrollUp.addEventListener("click", function (event) { scrollUp(); });

const btnScrollDown = document.getElementById("scroll-down");
btnScrollDown.addEventListener("click", function (event) { scrollDown(); });