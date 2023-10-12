const inputEl = document.querySelector("#validation-input");
const textLength = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onBlur);

function onBlur(e) {
  if (e.target.value.length !== textLength) {
    // inputEl.classList.remove("valid");
    return (inputEl.classList = "invalid");
  }
  return (inputEl.classList = "valid");
  // inputEl.classList.remove("invalid");
}
