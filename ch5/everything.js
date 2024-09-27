/**
 * Loop checking each element of the array to see if
 * it passes the criteria in the inFcn
 * @param {*} arr - input array
 * @param {*} inFcn  - test function
 * @returns boolean for whether all elements pass
 */
const everyWithLoop = (arr, inFcn) => {
  for(const el of arr) {
    if(!inFcn(el)) return false;
  };
  return true;
}

/**
 * In order to test if every element in an input array
 * passes the criteria defined in the inFcn, checks if some
 * do NOT pass the criteria. If that is the case, then we 
 * return false
 * @param {*} arr - input array
 * @param {*} inFcn  - test function
 * @returns boolean whether all elements in array pass the input function test
 */
const everyWithSome = (arr, inFcn) => {
  return ! arr.some(el => !inFcn(el));
}

const testFcn = (inputVal) => {
  return inputVal < 6;
};

[
  [1,2,3,4,5],
  [-6,-5,-3,13],
  [-122.16, 500],
  [-1],
  [10000],
  [6],
  [5]
].forEach(inputArr => {
  console.log("input is: " + inputArr);
  let loopAnswer = everyWithLoop(inputArr, testFcn);
  let someAnswer = everyWithSome(inputArr, testFcn);
  console.log("loopAnswer is: " + loopAnswer);
  console.log("someAnswer is: " + someAnswer);
});

