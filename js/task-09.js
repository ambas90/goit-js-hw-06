const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bgColorChange() {
  let bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorText.textContent = bgColor;
}

btn.addEventListener("click", bgColorChange);
