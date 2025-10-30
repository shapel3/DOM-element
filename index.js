const root = document.getElementById("root");

const products = [
  { name: "Яблука", category: "Фрукти", price: 40 },
  { name: "Хліб", category: "Випічка", price: 25 },
  { name: "Молоко", category: "Молочні продукти", price: 30 },
  { name: "Курячі грудки", category: "М'ясо", price: 120 },
  { name: "Картопля", category: "Овочі", price: 20 },
  { name: "Помідори", category: "Овочі", price: 50 },
  { name: "Сир", category: "Молочні продукти", price: 80 },
  { name: "Яйця", category: "Молочні продукти", price: 35 },
  { name: "Макарони", category: "Бакалія", price: 45 },
  { name: "Чай", category: "Напої", price: 60 },
  { name: "Шоколад", category: "Солодощі", price: 70 },
  { name: "Сік апельсиновий", category: "Напої", price: 55 },
  { name: "Банани", category: "Фрукти", price: 65 },
  { name: "Рис", category: "Бакалія", price: 50 },
  { name: "Огірки", category: "Овочі", price: 30 },
];

const section = document.createElement("section");
section.className = 'shop'
const cards = products.map((product) => createCard(product));
section.append(...cards);
root.append(section);

function createCard(product) {
  const { name, category, price } = product;
  const article = document.createElement("article");
  article.classList.add("product");
  const h2 = document.createElement("h2");
  h2.classList.add("product-name");
  h2.textContent = name;

  const h3 = document.createElement("h3");
  h3.classList.add("product-category");
  h3.textContent = category;

   const p = document.createElement("p");
  h3.classList.add("product-price");
  p.textContent = price+' uah';

   const btn = document.createElement("button");
  btn.classList.add("product-category");
  btn.textContent = 'add to cart';

  article.append(h2, h3 , p , btn);

 

  return article;
}
