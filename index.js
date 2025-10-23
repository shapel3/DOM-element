const wrapper = document.getElementById("wrapper");
const block = document.getElementById("block");

// wrapper.addEventListener('mousemove',(event)=>{
//    block.style.left = event.clientX + 'px'
//    block.style.top = event.clientY + 'px'
// })

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "ArrowLeft") {
    console.log("left");
  }
  if (event.key === "ArrowRight") {
    console.log("right");
  }
  if (event.key === 'ArrowUp') {
    console.log('top');
    
  }
   if (event.key === 'ArrowDown') {
    console.log('down');
    
  }
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
