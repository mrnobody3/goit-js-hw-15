const inputRangeEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", onChange);

function onChange(e) {
  textEl.style.fontSize = `${e.target.value}px`;
}
