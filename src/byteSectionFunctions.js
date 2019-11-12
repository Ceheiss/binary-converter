const getByteValue = (byteValueArray) => byteValueArray.reduce((acc, bitValue) => acc + bitValue);

const getBitValue = (powerOfTwo, bitStatus) => powerOfTwo * bitStatus;

export { getBitValue, getByteValue }
