/*First method*/

const buttons = document.querySelectorAll(".buttons .button");
const wrapperElement = document.querySelector(".wrapper-element");

// for (const button of buttons) {
//   button.addEventListener("click", btnHadler);
// }
// function btnHadler({ target }) {
//   for (const button of buttons) {
//     button.style.backgroundColor = "initial";
//     button.style.color = "initial";
//   }
//   target.style.backgroundColor = " var(--main-color)";
//   target.style.color = " white";

//   wrapperElement.style.flexDirection = target.dataset.flexDirection;
// }

/*Second method*/

for (const button of buttons) {
  button.addEventListener("click", btnHadler);
}

function btnHadler({ target }) {
  for (const button of buttons) {
    button.classList.remove("active");
  }
  target.classList.add("active");
  wrapperElement.style.flexDirection = target.dataset.flexDirection;
}
