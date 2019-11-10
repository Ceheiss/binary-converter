import binaryToDecimal from './binaryToDecimal.js'
import binaryInteractive from './binaryInteractive.js';

let button = document.getElementById("btn");
let binaryValue = document.getElementById("binary-value");
let output = document.getElementById("number-output");
let byteDigits = document.getElementById("byte-digits")

button.addEventListener("click", function(){
  output.innerHTML = `${binaryValue.value} is ${binaryToDecimal(binaryValue.value)}`;
  binaryValue.value = 0;
})

byteDigits.addEventListener('click', function(e){
  binaryInteractive(e);
}) 