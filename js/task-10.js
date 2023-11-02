const numberInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
let boxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = "";
  for (let i = 1; i <= amount; i++) {
    markup += `<div style="background-color:${getRandomHexColor()}; width:${boxSize}px;height:${boxSize}px"></div>`;
    boxSize += 10;
  }
  boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  boxSize = 30;
}

createBtn.addEventListener("click", () => {
  createBoxes(numberInput.value);
});
destroyBtn.addEventListener("click", destroyBoxes);
