const parent = document.querySelector("main");
const scrollYPerView = window.innerHeight;
const btnScrollUp = document.getElementById("scroll-up");
const btnScrollDown = document.getElementById("scroll-down");

parent.addEventListener("wheel", function (event) {
  event.preventDefault();

  if (event.deltaY > 0) {
    btnScrollUp.setAttribute("disabled", true);
    scrollDown();
  } else if (event.deltaY < 0) {
    btnScrollDown.setAttribute("disabled", true);
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

btnScrollUp.onclick = function () { scrollUp(); };

btnScrollDown.onclick = function () { scrollDown(); };
