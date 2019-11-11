import { binaryToDecimal } from './binaryToDecimal.js'
import { getBitValue } from './getBitValue.js';
import { getByteValue } from './getByteValue.js';
import { toggleBitValue } from './toggleBitValue.js'

const button = document.getElementById("btn");
const binaryValue = document.getElementById("binary-value");
const output = document.getElementById("number-output");
const byteDigits = document.getElementById("byte-digits");
const byteValueOutput = document.getElementById("byte-value-output");

button.addEventListener("click", () => {
  output.innerHTML = `${binaryValue.value} is ${binaryToDecimal(binaryValue.value)}`;
  binaryValue.value = 0;
})

byteDigits.addEventListener('click', (e) => {
  toggleBitValue(e);
  let dataValue = getBitValue(Number(e.target.id), Number(e.target.innerHTML));
  event.target.setAttribute("data-value", dataValue);
  let byteArray = Array.from(byteDigits.children);
  let valueArray = byteArray.map(el => Number(el.getAttribute("data-value")));
  byteValueOutput.innerHTML = getByteValue(valueArray);
}) 
