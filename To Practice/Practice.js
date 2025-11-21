

const textBox = document.getElementById("textBox");
const toFehrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const myButton = document.getElementById("myButton");
let temp;



myButton.onclick = function() {
  if (toFehrenheit.checked) {
    temp = Number(textBox.value)  
    result.innerHTML = (temp * 9/5) + 32 + " °F";

  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    result.innerHTML = (temp - 32) * 5/9 + " °C";
  } else {
    result.innerHTML = "Please select a conversion type.";
  }
}