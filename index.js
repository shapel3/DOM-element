const root = document.getElementById("root");
console.dir(root);

const h1 = document.createElement("hi");
h1.textContent = "i create h1";
h1.classList.add("heading");
h1.addEventListener("click", () => {
  h1.style.color = "red";
});

const btn = document.createElement("button");
btn.textContent = "click me";

const em = document.createElement('em')
em.textContent = '!!!!!'

h1.append(em)

root.append(h1, btn);
