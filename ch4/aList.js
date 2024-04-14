const arrayToList = (inputArr) => {
  let list = null;

  for (let i = inputArr.length - 1; i >= 0; i--) {
    list = {
      value: inputArr[i],
      rest: list
    }
  }
  console.log("list is: " + JSON.stringify(list));
  return list;
}

const listToArray = (list) => {
    let newArr = [];
    while (list !== null) {
        newArr.push(list.value)
        list = list.rest;  // Move to the next node
    }
    console.log("newArr is: " + newArr);
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
  if (list === null) return undefined;
  if (index === count) return list;
  list = list.rest;
  return nthRecursive(index, list, count + 1);
}

const testArr = [1,2,3];
let testList =  arrayToList(testArr);
listToArray(testList);

let prepended = prepend(4, testList);
console.log("prepended: " + JSON.stringify(prepended));
let index = 2;
console.log("index " + index + " in list is: " + JSON.stringify(nth(index, prepended)));
console.log("index " + index + " in list is: " + JSON.stringify(nthRecursive(index, prepended)));
index = 5;
console.log("index " + index + " in list is: " + JSON.stringify(nth(index, prepended)));
console.log("index " + index + " in list is: " + JSON.stringify(nthRecursive(index, prepended)));
index = 3;
console.log("index " + index + " in list is: " + JSON.stringify(nth(index, prepended)));
console.log("index " + index + " in list is: " + JSON.stringify(nthRecursive(index, prepended)));
index = 4;
console.log("index " + index + " in list is: " + JSON.stringify(nth(index, prepended)));
console.log("index " + index + " in list is: " + JSON.stringify(nthRecursive(index, prepended)));