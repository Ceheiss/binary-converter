function getByteValue(array){
  let byteTotal = array.reduce((acc, bitValue) => acc + bitValue);
  return byteTotal;
}

export default getByteValue