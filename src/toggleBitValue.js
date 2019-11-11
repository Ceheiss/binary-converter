import { updateBitValue } from './updateBitValue.js'

export function toggleBitValue(event){
  let currentValue = event.target.innerHTML;
  event.target.innerHTML = updateBitValue(currentValue);
  return updateBitValue;
}
