const wrapper = document.getElementById("wrapper");
const block = document.getElementById("block");

// wrapper.addEventListener('mousemove',(event)=>{
//    block.style.left = event.clientX + 'px'
//    block.style.top = event.clientY + 'px'
// })

let x = 0;
let y = 0;
const step = 5

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowLeft") {
    console.log("left");
    x-=step;
  }
  if (event.key === "ArrowRight") {
    console.log("right");
    x+=step;
  }
  if (event.key === "ArrowUp") {
    console.log("top");
    y-=step;
  }
  if (event.key === "ArrowDown") {
    console.log("down");
    y+=step;
  }
  block.style.left = x + "px";
  block.style.top = y + "px";
});

// const btn = document.getElementById("btn");
// wrapper.addEventListener("click", (event) => {
//   console.log('click wrapper');
//   event.target.style.color = 'red'
// });
// //wrapper.click()// сгенерували штучно клік(подію)

// btn.addEventListener('click',(event)=>{
//   event.stopPropagation()//виконує лише поточну функцію
//   console.log('click btn')
// })
