function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);

function createBoxes(amount) {
  let boxSize = 30;
  let str = "";
  for (let i = 0; i < Number(amount); i += 1) {
    const currentSize = boxSize + i * 10;
    const div = `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color: ${getRandomHexColor()};"></div>`;

    str += div;
  }
  boxesEl.insertAdjacentHTML("beforeend", str);
}

function handleCreate() {
  createBoxes(inputEl.value);
}

function handleDestroy() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
