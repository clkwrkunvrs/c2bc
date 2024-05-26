const deepEqual = (value1, value2) => {
  if (value1 === value2) return true;
  if (value1 === null || value2 === null) return false;
  if (typeof value1 !== typeof value2) return false;

  if(typeof value1 === 'object') {
    const val1Keys = Object.keys(value1);
    const val2Keys = Object.keys(value2);

    //same number of keys in both
    if (val1Keys.length !== val2Keys.length) {
        return false;
    }

    //ensure same keys exist in both values and that values are the same
    for(const key of val1Keys) {
      if (!(val2Keys.includes(key)) ||
        !deepEqual(value1[key], value2[key])) {
          return false;
        }
    };
    
    if(value1 instanceof Number && value2 instanceof Number) {
      if (value1.valueOf() !== value2.valueOf()) return false;
    }

    if (Array.isArray(value1) !== Array.isArray(value2)) return false;

    return true;
  }

  return false;
}

function formatValue(value) {
  if (value instanceof Number) {
    return `new Number(${value.valueOf()})`; // Converts the Number object to a more readable format
  } else {
    return JSON.stringify(value); 
  }
}

[
  [1,1],
  ["1","1"],
  ["1", 1],
  [.234, -.234],
  [.234, .234],
  [2^8, 2^8],
  [2^8, 2^6],
  [Math.pow(2,2), Math.pow(2,2)],
  [Math.pow(2,4), Math.pow(2,2)],
  [false, true],
  [false, false],
  [new Number(1), 1],
  [new Number(1), new Number(1)],
  [new Number(2), new Number(1)],
  [""," "],
  [" "," "],
  ['a'.charCodeAt(0), 97],
  [{a: 1}, {a: 1, a: 2}],
  [{a: 1}, {a: 1}],
  [[{a:1},1],[{a:1},2]],
  [[{a:1},1],[{a:1},1]],
  [{0: 1, 1: 2}, [1, 2]],
  [{}, []],
  [{}, {}],
  [[], []],
  ['', []],
  ['', {}],
  [[],[1]],
  [[],[[]]],
  [{},[{}]],
  [new Number(1), [new Number(1)]],
  [[1,2,3,4],[2,3,4]],
  [[1,2,3,4],[1,2,3,4]],
  [[1,1], ''],
  [{a:1}, {a:''}],
  [undefined, null]
].forEach(([el1, el2]) => {
  const fcnResult = deepEqual(el1,el2);
  console.log(`result of ${formatValue(el1)}, ${formatValue(el2)}: ${fcnResult}`);
});