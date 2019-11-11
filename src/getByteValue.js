export function getByteValue(byteValueArray){
  return byteValueArray.reduce((acc, bitValue) => acc + bitValue);
}
