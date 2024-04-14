const deepEqual = (value1, value2) => {
  if (value1 === value2) return true;
  if (value1 === null || value2 === null) 
  if (typeof value1 !== typeof value2) return false;

  if(typeof value1 === 'object') {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
        return false;
    }

    Object.keys(value1).forEach((key) => {
      if (!(Object.keys(value2).includes(key)) ||
        !deepEqual(value1[key],value2[key])) return false;
    });
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
  [new Number(1), 1],
  [new Number(1), new Number(1)],
  [new Number(2), new Number(1)],
  [""," "],
  [" "," "],
  ['a'.charCodeAt(0), 97],
].forEach(([el1, el2]) => {
  const fcnResult = deepEqual(el1,el2);
  console.log(`result of ${formatValue(el1)}, ${formatValue(el2)}: ${fcnResult}`);
});