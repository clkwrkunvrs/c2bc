const arrayToList = (inputArr) => {
  let list = null;

  for (let i = inputArr.length - 1; i >= 0; i--) {
    list = {
      value: inputArr[i],
      rest: list
    }
  }
  return list;
}

const listToArray = (list) => {
    let newArr = [];
    while (list !== null) {
        newArr.push(list.value)
        list = list.rest;  // Move to the next node
    }
    return newArr;
}

const prepend = (elem, list) => {
    return {
      value: elem,
      rest: list
    }
}

const nth = (index, list) => {
    let count = 0; 
    while (list !== null && count < index) {
        list = list.rest;  // Move to the next node
        count++; 
    }
    return list === null ? undefined : list;
}

const nthRecursive = (index, list, count = 0) => {
  if (index < 0) {
    console.log("index must be greater than zero"); 
    return null;
  }
  if (list === null) return undefined;
  if (index === count) return list;
  list = list.rest;
  return nthRecursive(index, list, count + 1);
}

//TEST CASES

let testArr = [
  [1,2,3],
  [3,2,1],
  [],
  [1,1],
  [-1],
  [1,2,3,4,5],
  [-1,-1],
  [6,6],
  [12345678912345],
];

testArr.forEach((arr) => {
  console.log("input array: " + arr);

  let testList = arrayToList(arr);
  console.log("testList: " + JSON.stringify(testList));

  let testArr = listToArray(testList);
  console.log("testArr: " + testArr);

  let nthEl = nthRecursive(0, testList);
  console.log("testList element at index 0: " + JSON.stringify(nthEl));
  nthEl = nthRecursive(1, testList);
  console.log("testList element at index 1: " + JSON.stringify(nthEl));
  nthEl = nthRecursive(2, testList);
  console.log("testList element at index 2: " + JSON.stringify(nthEl));
  nthEl = nthRecursive(3, testList);
  console.log("testList element at index 3: " + JSON.stringify(nthEl));
  nthEl = nthRecursive(4, testList);
  console.log("testList element at index 4: " + JSON.stringify(nthEl));
  nthEl = nthRecursive(5, testList);
  console.log("testList element at index 5: " + JSON.stringify(nthEl));

  let prepended = prepend(22, testList);
  console.log("testList prepended with 22: " + JSON.stringify(prepended));
  prepended = prepend(-1, testList);
  console.log("testList prepended with -1: " + JSON.stringify(prepended));
  prepended = prepend(0, testList);
  console.log("testList prepended with 0: " + JSON.stringify(prepended));
  console.log("-----------------------------------------------\n");
});