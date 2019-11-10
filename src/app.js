import binaryToDecimal from './binaryToDecimal.js'

let button = document.getElementById("btn");
let binaryValue = document.getElementById("binary-value");
let output = document.getElementById("number-output");

button.addEventListener("click", function(){
  output.innerHTML = `${binaryValue.value} is ${binaryToDecimal(binaryValue.value)}`;
  binaryValue.value = 0;
})

