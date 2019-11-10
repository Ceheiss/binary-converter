function binaryToDecimal(number) {
  let numArr = String(number).split("").reverse();
  let length = numArr.length;
  let decimalValue = 0;
  let multiplier = 2;
  for (let i = 0; i < length; i++){
    if (i === 0) {
      decimalValue = decimalValue + Number(numArr[i]);
    } else {
      decimalValue = decimalValue + (Number(numArr[i]) * multiplier);
      multiplier = multiplier * 2;
    }
  }
  let returnedValue = String(decimalValue);
  return returnedValue
}

export default binaryToDecimal;



