import assert from 'assert';

/**
 * checks if input value is even
 * @param {*} n - input value
 * @returns true if even, false if not
 */
const isEven = (n) => {
  n = Math.abs(n);

  if (n === 0) return true; 
  else if (n === 1) return false;
  return isEven(n - 2);
}

assert(isEven(2), "two");
assert(!isEven(1), "one");
assert(isEven(4), "four");
assert(!isEven(5001), "5001");
assert(isEven(-2), "-2");
assert(!isEven(-1), "-1");
assert(!isEven(-5001), "-1");
console.log("all checks passed");

[
 [2, true],
 [1, false],
 [4, true],
 [5001, false],
 [-2, true],
 [-1, false],
 [-5001, false]].forEach(([input, expectedOutput]) => {
  const actualOutput = isEven(input);
  console.log(`For input ${input}, expected ${expectedOutput}, received ${actualOutput}`);
});
