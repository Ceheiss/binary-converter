import updateBitValue from './updateBitValue.js'

function toggleBitValue(event){
  let currentValue = event.target.innerHTML;
  event.target.innerHTML = updateBitValue(currentValue);
  return updateBitValue;
}

export default toggleBitValue