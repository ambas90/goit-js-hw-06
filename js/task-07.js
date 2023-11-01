const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
slider.addEventListener("input", () => {
  console.log(slider.value);
  text.style.fontSize = `${slider.value}px`;
});
