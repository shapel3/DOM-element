// Get the first form
const [form] = document.forms;

// Get the input elements by their name attributes
const loginInput = form.elements.login;
loginInput.focus();
const passwordInput = form.elements.password;
const message = form.elements.message
const fruits = form.elements.fruits
console.dir(fruits)
const radioElements = form.elements.drink;
const select = form.elements.town;
const selectDep = form.elements.department;
selectDep.disabled = true;
const submitBtn = document.querySelector('[type="submit"]');
submitBtn.disabled = true;
let amountInput = 0;

const loginPattern = /^[a-z0-9_-]{3,15}$/;
const passwordPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$ %^&*-]).{8,32}$/;
// gr3at@3wdsG

//textarea
//keydown keyup keypress copy select paste cut 
message.addEventListener('keydown',(event)=>{
  console.log(event.key);
  
})

const arrayFruits = [];
fruits.forEach((fruct)=>{
  fruct.addEventListener('change',(event)=>{
    console.log(event.target.checked);
    console.log(event.target.value);
    arrayFruits.push(event.target.value)
    console.log(arrayFruits);
    
  })
})

select.addEventListener("change", () => {
  if (select.value !== "null") {
    console.log(select.value);
    selectDep.disabled = false;
    selectDep.focus();
  } else {
    selectDep.disabled = true;
  }
});
selectDep.addEventListener("change", () => {
  if (selectDep.value !== "null") {
    console.log(selectDep.value);
  }
});

radioElements.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    console.dir(event.target.checked);
    console.dir(event.target.value);
    radioElements.forEach((elem) => {
      if (elem !== event.target) {
        elem.disables = true;
      }
    });
  });
});

loginInput.addEventListener("change", () => {
  if (loginPattern.test(loginInput.value.trim())) {
    amountInput++;
  }
  console.log(amountInput);
  if (amountInput >= 2) {
    submitBtn.disabled = false;
  }
});
passwordInput.addEventListener("change", () => {
  if (passwordPattern.test(passwordInput.value.trim())) {
    amountInput++;
  }
  console.log(amountInput);
  if (amountInput >= 2) {
    submitBtn.disabled = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  if (loginPattern.test(login) && passwordPattern.test(password)) {
    form.submit();
    alert("Data was sent, thanks!");
    return;
  }
  alert("Enter right login or password");
});

// Add focus event to login input
// loginInput.addEventListener("focus", () => {
//   loginInput.style.backgroundColor = "#00ff0029";
// });

// // Add blur event
// loginInput.addEventListener("blur", () => {
//   const loginValue = loginInput.value.trim();
//   if (loginValue === "") {
//     loginInput.style.backgroundColor = "red";
//   }
// });

// // Add change event
// loginInput.addEventListener("change", () => {
//   loginInput.style.backgroundColor = "blue";
// });

// // Add input event
// loginInput.addEventListener("input", () => {
//   const cyrillicPattern = /[А-Яа-я]+/;
//   const loginValue = loginInput.value.trim();
//   if (cyrillicPattern.test(loginValue)) {
//     alert("ви пишите кирилицей");
//     loginInput.style.fontSize = "30px";
//   }
//   loginInput.style.backgroundColor = "yellow";
// });
