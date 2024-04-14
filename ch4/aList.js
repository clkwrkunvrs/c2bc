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

function getLengthOfList(node) {
    let count = 0;
    while (node !== null) {
      console.log("node is" + node.value);
        count++;  // Increment the count for each node encountered
        node = node.rest;  // Move to the next node
    }
    return count;
}

const testArr = [1,2,3];
let testList =  arrayToList(testArr);
listToArray(testList);