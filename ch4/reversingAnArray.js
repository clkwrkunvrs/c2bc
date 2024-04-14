const reverseArray = (inputArr) => {
  let newArr = [];
  for (let el of inputArr) {
    newArr.unshift(el);
  }
  return newArr;
}

const reverseArrayInPlace = (inputArr) => {
  let left = 0;
  let right = inputArr.length - 1;

  while (left < right) {
    [inputArr[left], inputArr[right]] = [inputArr[right], inputArr[left]];
    left++;
    right--;
  }
  return inputArr;
}

const inputArrs = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [2],
  [1,-1],
  [-5, -4, -3, -2, -1],
  [-1, -2, -3, -4, -5],
  [-4, -3, -1],
  [2.1, 1.2, 1.3, 1.4, 1.5],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, -1],
  [-0.1, -1.2, -1.3, -1.4, -1.5],
  [],
  [0, -1, -1],
  [2, 2],
  [-1, -1],
  [0],
];

inputArrs.forEach((inputArr) => {
  // Slice to send copy instead of original
  const reverseOutput = reverseArray(inputArr.slice());
  const inPlaceOutput = reverseArrayInPlace(inputArr.slice());
  console.log(`reverseArray: ${inputArr} -> ${reverseOutput}`);
  console.log(`reverseArrayInPlace: ${inputArr} -> ${inPlaceOutput}`);
  console.log("\n");
});