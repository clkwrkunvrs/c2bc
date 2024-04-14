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
    let listLength = getLengthOfList(list);
    while (count < listLength && count < index) {
        list = list.rest;  // Move to the next node
        count++;  // Increment the count for each node encountered
    }
    return (count >= list.length) ? undefined : list;
}

function getLengthOfList(node) {
    let count = 0;
    while (node !== null) {
        count++;  // Increment the count for each node encountered
        node = node.rest;  // Move to the next node
    }
    return count;
}

const testArr = [1,2,3];
let testList =  arrayToList(testArr);
listToArray(testList);

let prepended = prepend(4, testList);
console.log("prepended: " + JSON.stringify(prepended));
let index = 2;
console.log("index " + index + " in list is: " + JSON.stringify(nth(index, prepended)));