// Import functions
import { tests, eq } from "./simpleTestNode";
import { binaryToDecimal } from "../src/binaryToDecimal";
import {  getByteValue, getBitValue } from '../src/byteSectionFunctions';
import { updateBitValue } from '../src/domMutatingFunctions';

/*
    ==== binaryToDecimal ====
    it should receive a number a return a string
    it should output a decimal value that represents the binary value
    it should only accept zeroes and ones
*/

tests({
  "it should receive a number and return a string": function() {
    let transformedNumber = binaryToDecimal(1001);
    eq(typeof transformedNumber, "string");
  },
  "it should output a decimal value that represents the binary value": function() {
    let transformedNumber = binaryToDecimal(1001);
    eq(transformedNumber, String(parseInt(1001, 2)));
  },
  "it should only accept zeroes and ones": function() {
    let notBinary = binaryToDecimal(100020);
    let returnString = "not binary... Come on! Enter just 0's and 1's";
    eq(notBinary, returnString);
  },
  /*
    ==== updateBitValue ====
    it should toggle from 0 to 1
    it should toggle from 1 to 0
    */
  "it should return 0 if 1 is given": function() {
    let newValue = updateBitValue("1");
    eq(newValue, "0");
  },
  "it should return 1 if 0 is given": function() {
    let newValue = updateBitValue("0");
    eq(newValue, "1");
  },
  /*
    ==== getByteValue ====
    it should reduce numbers and return the sum
  */
  "it should return 0 if 1 is given": function() {
    let newValue = getByteValue([1, 2, 3]);
    eq(newValue, 6);
  },
  /*
    ==== getBitValue ====
    it should multiply 2 values
  */
  "it should multiply two values": function() {
    let newValue = getBitValue(2,2);
    eq(newValue, 4);
  }
});
