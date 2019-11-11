function getByteValue(byteValueArray){
  return byteValueArray.reduce((acc, bitValue) => acc + bitValue);
}

function getBitValue(powerOfTwo, bitStatus){
  return powerOfTwo * bitStatus;
}

function toggleBitValue(event){
  let currentValue = event.target.innerHTML;
  event.target.innerHTML = updateBitValue(currentValue);
  return updateBitValue;
}

function updateBitValue(currentValue){
  currentValue === "1" ? currentValue = "0" : currentValue = "1";
  return currentValue
}

export { updateBitValue, toggleBitValue, getBitValue, getByteValue }