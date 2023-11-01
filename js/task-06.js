const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
  if (textInput.value.length == textInput.getAttribute("data-length")) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
