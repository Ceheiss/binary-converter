import toggleBitValue from './toggleBitValue.js'

function getBitValue(event){
  toggleBitValue(event)
  let powerOfTwo = Number(event.target.id);
  let bitStatus = Number(event.target.innerHTML);
  let dataValue = powerOfTwo * bitStatus;
  event.target.setAttribute("data-value", dataValue);
  return dataValue;
}

export default getBitValue