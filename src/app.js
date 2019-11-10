import binaryToDecimal from './binaryToDecimal.js'
import getBitValue from './getBitValue.js';
import getByteValue from './getByteValue.js';

let button = document.getElementById("btn");
let binaryValue = document.getElementById("binary-value");
let output = document.getElementById("number-output");
let byteDigits = document.getElementById("byte-digits");
let byteValueOutput = document.getElementById("byte-value-output");

button.addEventListener("click", function(){
  output.innerHTML = `${binaryValue.value} is ${binaryToDecimal(binaryValue.value)}`;
  binaryValue.value = 0;
})

byteDigits.addEventListener('click', function(e){
  getBitValue(e);
  let byteArray = Array.from(byteDigits.children);
  let valueArray = byteArray.map(el => Number(el.getAttribute("data-value")));
  byteValueOutput.innerHTML = getByteValue(valueArray);
}) 
