import assert from 'assert';

const range = (n1, n2, step = 1) => {
  let rangeArr = [];

  if (n1 <= n2) {
    for (let i = n1; i <= n2; i = i + step) {
      rangeArr.push(i);
    }
  } else {
    //what indentation level should this be?
    for (let i = n1; i >= n2; i = i + step) {
      rangeArr.push(i);
    }
  }

  //this could be done but it's less readable imo and does the <= 
  //comparison every time it loops
  //for (let i = n1; (n1 <= n2) ? i <= n2 : i >= n2; i = i + step) {

  return rangeArr;
}

const sum = (rangeArr) => { 
  return rangeArr.reduce((sum, elem) => sum + elem, 0);
}

assert(sum(range(1, 10, 2)) === 25, "25");
assert(sum(range(5, 2, -2)) === 8, "8");
assert(sum(range(5,2,-1)) === 14, "14");
//problem doesn't call for accounting for postive step values
//on a range where last element < first element
//sum(range(5, 2, 1));
assert(sum(range(1, 100)) === 5050, "5050");
//problem also doesn't call to account for this type of function call
//where there is no step value and the second element is less than the first
//sum(range(1,-100));
assert(sum(range(1, -100, -1)) === -5049, "-5049");
assert(sum(range(-50, -100, -1)) === -3825, "-3825");
assert(sum(range(-100, -50, 1)) === -3825, "-3825 pt 2");
console.log("all checks passed");
