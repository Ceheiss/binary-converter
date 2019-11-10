function binaryToDecimal(number) {
  let numArr = String(number).split("").reverse();
  let length = numArr.length;
  let decimalValue = 0;
  let multiplier = 2;
  for (let i = 0; i < length; i++){
    if (numArr[i] != 0 && numArr[i] != 1) {
      return "not binary... Come on! Enter just 0's and 1's";
    }
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



