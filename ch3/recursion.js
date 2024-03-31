const assert =  require('assert');
/**
 * checks if input value is even
 * @param {*} n - input value
 * @returns true if even, false if not
 */
const isEven = (n) => {
  n = Math.abs(n);

  //these are so short. Can i just keep them one line? Would anyone really care?
  if (n === 0) return true; 
  else if (n === 1) return false;
  return isEven(n-2);
  //which one? first one easier to read
  /*return (n === 0) ? true :
  (n === 1) ? false :
  isEven(n - 2);*/
}

//Is there harm in using assrt or jest in this case?
//I can see how it's a time suck but if you have
//many function calls, you can get lost on which one is failing
//and since it's a recursive call, the input value changes from your original
//input each time
assert(isEven(2), "two");
assert(!isEven(1), "one");
assert(isEven(4), "four");
assert(!isEven(5001), "5001");
assert(isEven(-2), "-2");
assert(!isEven(-1), "-1");
assert(!isEven(-5001), "-1");
console.log("all checks passed");
