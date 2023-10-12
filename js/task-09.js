function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});
