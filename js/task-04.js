const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);
let counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrement = () => {
  counterValue.textContent--;
};

const increment = () => {
  counterValue.textContent++;
};

decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
