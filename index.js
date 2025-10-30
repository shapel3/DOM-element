const root = document.getElementById("root");
const btnSubcsribe = document.createElement('button')
btnSubcsribe.textContent  = 'Subscribe now!'
root.append(btnSubcsribe)

//відтермінований запуск
//setTimeout(функцію, часВМІЛІСекундах)
const idTimeout = setTimeout(
  () => {
  const removeSubscribe = () => {
    document.querySelector(".subscribe").remove();
  };
  const subscribe = document.createElement("div");
  subscribe.classList.add("subscribe");
  const close = document.createElement("span");
  close.textContent = "X";
  close.addEventListener("click", removeSubscribe);
  const h2 = document.createElement("h2");
  h2.textContent = "Subscribe to our email newsletter";
  const form = document.createElement("form");
  form.className = "subscribe-form";
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.addEventListener("click", removeSubscribe);
  button.textContent = "Subscribe";
  subscribe.append(close, h2, form);
  form.append(input, button);
  root.append(subscribe);
}, 5000);

console.log(idTimeout);

btnSubcsribe.addEventListener('click',()=>{
  clearTimeout(idTimeout)
})