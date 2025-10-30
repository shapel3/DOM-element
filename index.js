const root = document.getElementById("root");
const carBrands = ["Toyota","Ford","BMW","Mercedes","Honda","Audi","Chevrolet"]

const ol = document.createElement('ol');
const lis = carBrands.map((brand)=>{
  const li = document.createElement('li')
  li.textContent = brand;
  return li;
})

ol.append(...lis)
root.append(ol);
