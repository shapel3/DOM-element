const products = document.querySelectorAll("#shop .product");
const check = document.querySelector("#shop h1 span");

let summa = 0;
check.textContent = summa;

products.forEach((product) => {
  product.addEventListener("click", (event) => {
    //event.currectTarget === product
    event.currentTarget.style.backgroundColor = "pink";
    summa += Number(event.currentTarget.dataset.price);
    check.textContent = summa
  });
});
