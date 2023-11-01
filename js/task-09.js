function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

btn.addEventListener("click", bgColorChange);

function bgColorChange() {
  let bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorText.textContent = bgColor;
}
