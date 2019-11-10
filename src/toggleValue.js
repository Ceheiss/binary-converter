import updateValue from './updateValue.js'

function toggleValue(event){
  let currentValue = event.target.innerHTML;
  event.target.innerHTML = updateValue(currentValue);
  return updateValue;
}

export default toggleValue