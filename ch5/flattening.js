const flattenArray = (arr) => {
  return arr.reduce((newArr, curArr) =>  {
    if (Array.isArray(curArr)) {
      return newArr.concat(flattenArray(curArr));
    } else {
      return newArr.concat(curArr);
    }
  },[]);
}

[
  [[1, 2, 3], [1, 2, 3], [1, 2, 3]], 
  [["hey ", "how"], [" are"], [" "], ["you ", "doing", "?"]], 
  [[[1, 2, 3], [4, 5]], [[6, 7]]], 
  [[["hello", "world"]], [["goodbye", "world"]]], 
  [[[], []], [[]], []], 
  [[1, 2, [3]], [4, [5, 6]]],
  [['*'],['?','?']],
  [[{"so":1}],[{"what":2}],[{"do":3}],[{"you":4}],[{"think":5}],[{"?":6}]]
].forEach(test => {
  let result = flattenArray(test);
  console.log(result);
})