import { binaryToDecimal } from './binaryToDecimal.js'
import { getBitValue, getByteValue } from './byteSectionFunctions.js';
import { toggleBitValue } from './domMutatingFunctions';

const button = document.getElementById("btn");
const binaryValue = document.getElementById("binary-value");
const output = document.getElementById("number-output");
const byteDigits = document.getElementById("byte-digits");
const byteValueOutput = document.getElementById("byte-value-output");

// event listener of the first part of the app
button.addEventListener("click", () => {
  output.innerHTML = `${binaryValue.value} is ${binaryToDecimal(binaryValue.value)}`;
  binaryValue.value = 0;
})

// event listener for the interactive byte section
byteDigits.addEventListener('click', (e) => {
  toggleBitValue(e);
  let dataValue = getBitValue(Number(e.target.id), Number(e.target.innerHTML));
  event.target.setAttribute("data-value", dataValue);
  let byteArray = Array.from(byteDigits.children);
  let valueArray = byteArray.map(el => Number(el.getAttribute("data-value")));
  byteValueOutput.innerHTML = getByteValue(valueArray);
}) 
