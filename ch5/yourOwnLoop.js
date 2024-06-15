const loop = (loopValue, testFunc, bodyFunc, updateFunc) => {
  console.log("starting value is " + loopValue);
  while(testFunc(loopValue)) {
    loopValue = updateFunc(loopValue);
  }
  console.log("value is now " + loopValue);
}

/**
 * returns if input value < 20
 * @param {} inputValue 
 * @returns input value < 20
 */
const testFcn = (inputValue) => {
  return inputValue < 20;
}
const bodyFcn = (inputValue) => {
  return inputValue;
}
/**
 * adds one to input value
 * @param {} inputValue 
 * @returns input value + 1
 */
const updateFcn = (inputValue) => {
  return inputValue + 1;
}

[
  1,
  2,
  3,
  21,
  100,
  -30,
  -1,
  -42.6
].forEach(x => {
  loop(x, testFcn, bodyFcn, updateFcn);
});