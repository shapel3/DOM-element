const root = document.getElementById("root");
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

const btns = colors.map((color) => {
  const btn = document.createElement("button");
  btn.textContent = color;
  btn.style.backgroundColor = color;
  return btn;
});

root.append(...btns);
