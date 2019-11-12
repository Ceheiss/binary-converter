const toggleBitValue = (event) => {
  let currentValue = event.target.innerHTML;
  event.target.innerHTML = updateBitValue(currentValue);
  return updateBitValue;
}

const updateBitValue = (currentValue) => {
  currentValue === "1" ? currentValue = "0" : currentValue = "1";
  return currentValue
}

export { toggleBitValue, updateBitValue }
