// const increaseBtn = document.getElementById("increaseBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countLabel = document.getElementById("count");
// let count = 0;

// increaseBtn.onclick = function() {
//   count++;
//   countLabel.textContent = count;
// }
// decreaseBtn.onclick = function() {
//   count--;
//   countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//   count = 0;
//   countLabel.textContent = count;
// }

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(y);
//z = Math.log(9);
// z = Math.sin(y);
// z = Math.cos(y);
// z = Math.tan(y);
// z = Math.max(5,10,14,3,7,1);
// z = Math.min(5,10,14,3,7,1);
// z = Math.abs(x);
// z = Math.sign(x);

// const checkBtn = document.getElementById("checkBox");
// const firstOption = document.getElementById("option1");
// const secondOption = document.getElementById("option2");
// const thirdOption = document.getElementById("option3");
// const submitBtn = document.getElementById("Mysubmit");
// const result = document.getElementById("result");
// const message = document.getElementById("message");

// submitBtn.onclick = function () {
//   if (checkBox.checked) {
//     result.textContent = "You have subscribed";
//   } else {
//     result.textContent = "You have not subscribed";
//   }

//   if (firstOption.checked) {
//     message.textContent = "YOU have selected the first option";
//   } else if (secondOption.checked) {
//     message.textContent = "YOU have selected the second option";
//   } else if (thirdOption.checked) {
//     message.textContent = "YOU have selected the third option";
//   } else {
//     message.textContent = "YOU must choose an option!";
//   }
// };


const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const counter = document.getElementById("heading");
let count = 0;

decrease.onclick = function() {
  count--;
  counter.textContent = count;
}

reset.onclick = function() {
  count = 0;
  counter.textContent = count;
}

increase.onclick = function() {
  count++;
  counter.textContent = count;
}




