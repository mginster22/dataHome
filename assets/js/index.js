const buttons = document.querySelectorAll(".buttons .button");
const wrapperElement = document.querySelector(".wrapper-element");

const wrapperItem = document.querySelectorAll(".wrapper-element .wrapper-item");

for (const button of buttons) {
  button.addEventListener("click", btnHadler);
}
function btnHadler({ target }) {
  if (
    target.dataset.style === "column" ||
    target.dataset.style === "column-reverse"
  ) {
    for (const item of wrapperItem) {
      item.style.width = "100%";
    }
  } else if (
    target.dataset.style === "row" ||
    target.dataset.style === "row-reverse"
  ) {
    for (const item of wrapperItem) {
      item.style.width = "50px";
    }
  }
  wrapperElement.style.flexDirection = target.dataset.style;
}
