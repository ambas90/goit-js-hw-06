const decBtn = document.querySelector(`button[data-action="decrement"]`);
const incBtn = document.querySelector(`button[data-action="increment"]`);
let value = document.querySelector("#value");
console.log(value);

const decrement = () => {
  value.textContent--;
};

const increment = () => {
  value.textContent++;
};
decBtn.addEventListener("click", decrement);
incBtn.addEventListener("click", increment);
